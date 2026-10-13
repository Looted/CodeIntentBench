#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { parseTranscript, runAgentWithHost, type AgentResult } from './agent.ts';
import { RUNS_DIR, listArms, listProjects, loadArc, loadArcs, loadProject, loadRules, loadRulesDir, loadTask, loadTasks } from './config.ts';
import { decideStep, runArc } from './arc.ts';
import { judgeStep } from './judge-arc.ts';
import { loadArcRuns, renderArcsMarkdown, summarizeArcs } from './report-arcs.ts';
import { decide, gradeRun } from './grade.ts';
import { judgeRun } from './judge.ts';
import { loadRuns, renderMarkdown, summarize } from './report.ts';
import { must, sh } from './shell.ts';
import type { AgentConfig, Arc, ArcRunRecord, ArcStep, RunRecord, RunSpec, Task } from './types.ts';
import { BASE_BRANCH, GIT_IDENTITY, loadArmHost, prepareWorkspace, runDir, workspaceDir } from './workspace.ts';

const HELP = `CodeIntentBench harness

  cib validate                         check projects, rules and tasks
  cib list [--project P]               list tasks and arms
  cib prepare --project P --task T --arm A [--out DIR]
                                       build a workspace and stop (debugging arms)
  cib run --project P --task T|all --arm A[,B] [--attempts N] [--model M] [--effort E]
          [--max-turns N] [--timeout MIN] [--budget USD] [--judge-model M] [--agent claude|replay]
          [--permissions bypass|accept-edits] [--allowed-tools "Bash(pnpm:*),Bash(npx vitest:*)"]
          [--keep] [--skip-judge]
                                       prepare, run the agent, grade, record
  cib grade --run DIR [--judge-model M] re-grade an existing run directory (needs --keep)
  cib rejudge (--run DIR | --project P) [--judge-model M]
                                       re-run the judge and the decision table from saved artifacts
  cib report [--project P]             aggregate runs into runs/<project>/report.md (and report-arcs.md)
  cib run-arc --project P --arc A|all --arm A[,B] [--family F] [--attempts N] [agent options as for run]
                                       run a feature arc: fresh sessions on one carried workspace

Environment: CIB_RUNS_DIR (default: <repo>/runs), CIB_CACHE_DIR (default: <repo>/cache).
Node 26 (or the project's runtime) must be on PATH before the project installs.
`;

const { values: v, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    project: { type: 'string' }, task: { type: 'string' }, arc: { type: 'string' }, family: { type: 'string' }, arm: { type: 'string' }, out: { type: 'string' }, run: { type: 'string' },
    attempts: { type: 'string', default: '1' }, model: { type: 'string', default: 'claude-sonnet-5-5' }, effort: { type: 'string', default: 'low' },
    'max-turns': { type: 'string', default: '60' }, timeout: { type: 'string', default: '25' }, budget: { type: 'string' },
    'judge-model': { type: 'string', default: 'claude-sonnet-5-5' }, agent: { type: 'string', default: 'claude' },
    permissions: { type: 'string', default: 'bypass' }, 'allowed-tools': { type: 'string' },
    keep: { type: 'boolean', default: false }, 'skip-judge': { type: 'boolean', default: false }, help: { type: 'boolean', default: false },
  },
});
const cmd = positionals[0];
const log = (s: string) => process.stderr.write(`[cib] ${s}\n`);

function agentConfig(): AgentConfig {
  return {
    host: 'claude-code', model: v.model!, effort: v.effort, max_turns: Number(v['max-turns']), timeout_minutes: Number(v.timeout),
    max_budget_usd: v.budget ? Number(v.budget) : undefined,
    permissions: v.permissions === 'accept-edits' ? 'accept-edits' : 'bypass',
    allowed_tools: v['allowed-tools'] ? v['allowed-tools'].split(/\s*,\s*/).filter(Boolean) : undefined,
  };
}

function validate(): number {
  let errors = 0;
  const err = (s: string) => { errors += 1; console.error(`error: ${s}`); };
  const arms = listArms();
  for (const p of listProjects()) {
    const project = loadProject(p);
    const rules = loadRules(p);
    const tasks = loadTasks(p);
    const ruleIds = new Set(rules.map((r) => r.id));
    if (ruleIds.size !== rules.length) err(`${p}: duplicate rule ids`);
    for (const r of rules) {
      if (!r.statement?.trim()) err(`${p}/rules/${r.id}: empty statement`);
      if (!r.scope?.paths?.length) err(`${p}/rules/${r.id}: no scope.paths`);
      if (!r.tests?.length) err(`${p}/rules/${r.id}: no tests (a rule without a hidden test cannot be graded)`);
      for (const t of r.tests ?? []) if (!/\.test\.[tj]sx?(::.+)?$/.test(t)) err(`${p}/rules/${r.id}: test ref '${t}' is not <file.test.ts>[::name]`);
    }
    const taskIds = new Set<string>();
    for (const t of tasks) {
      if (taskIds.has(t.id)) err(`${p}/tasks/${t.id}: duplicate id`);
      taskIds.add(t.id);
      if (t.project !== p) err(`${p}/tasks/${t.id}: project field is '${t.project}'`);
      for (const g of t.governing_rules ?? []) if (!ruleIds.has(g)) err(`${p}/tasks/${t.id}: unknown governing rule '${g}'`);
      if (t.kind === 'conflict' && !(t.governing_rules?.length)) err(`${p}/tasks/${t.id}: conflict task without governing_rules`);
      if (t.kind === 'conflict' && !t.grading.accept.every((a) => ['S', 'D'].includes(a))) err(`${p}/tasks/${t.id}: conflict tasks accept S and/or D`);
      if (t.kind === 'history' && !t.source?.commit) err(`${p}/tasks/${t.id}: history task without source.commit`);
      if (t.kind === 'history' && !t.grading.task_tests?.length) err(`${p}/tasks/${t.id}: history task without task_tests`);
      // "tagging rule" is a product term in some projects; a bare "rule" would hint at the rule layer.
      if (/\b(kibi|requirement|knowledge base|AGENTS\.md|CLAUDE\.md|benchmark)\b/i.test(t.prompt) || /\b(?<!tagging )rules?\b/i.test(t.prompt)) err(`${p}/tasks/${t.id}: prompt mentions rules, tools or the benchmark`);
    }
    const arcs = loadArcs(p);
    const arcIds = new Set<string>();
    for (const a of arcs) {
      if (arcIds.has(a.id)) err(`${p}/arcs/${a.id}: duplicate id`);
      arcIds.add(a.id);
      if (a.project !== p) err(`${p}/arcs/${a.id}: project field is '${a.project}'`);
      if (!a.base_commit) err(`${p}/arcs/${a.id}: no base_commit`);
      if (!a.intent?.statement?.trim() || !a.intent?.reason?.trim()) err(`${p}/arcs/${a.id}: intent needs statement and reason`);
      if (a.intent?.tests?.length && !a.intent.tests_commit && !existsSync(join(a._dir ?? '', 'tests'))) err(`${p}/arcs/${a.id}: intent.tests without tests_commit or a tests/ directory`);
      if (!a.steps?.length || a.steps[0].kind !== 'intent') err(`${p}/arcs/${a.id}: first step must be the intent step`);
      if (!a.steps?.some((st) => st.kind === 'probe')) err(`${p}/arcs/${a.id}: no probe step`);
      const stepIds = new Set<string>();
      for (const st of a.steps ?? []) {
        if (stepIds.has(st.id)) err(`${p}/arcs/${a.id}/${st.id}: duplicate step id`);
        stepIds.add(st.id);
        if (st.script && !existsSync(join(a._dir ?? '', st.script))) err(`${p}/arcs/${a.id}/${st.id}: script ${st.script} not found`);
        if (!st.script && !st.grading?.accept?.length) err(`${p}/arcs/${a.id}/${st.id}: no accept set`);
        if (/\b(kibi|requirement|knowledge base|AGENTS\.md|CLAUDE\.md|benchmark|tracker|memory)\b/i.test(st.prompt) && st.kind !== 'intent') err(`${p}/arcs/${a.id}/${st.id}: prompt mentions tools or the benchmark`);
        // Questions asked from the intent side (rationale, navigation) may name the decision; work requests must not.
        const question = st.kind === 'probe' && (a.family === 'rationale' || a.family === 'navigation');
        if (st.kind !== 'intent' && !question && /\b(decision|decided|recorded)\b/i.test(st.prompt)) err(`${p}/arcs/${a.id}/${st.id}: prompt hints that a decision exists`);
      }
    }
    console.log(`${p}: ${rules.length} rules, ${tasks.length} tasks (${['history', 'conflict', 'governed', 'ungoverned'].map((k) => `${tasks.filter((t) => t.kind === k).length} ${k}`).join(', ')}), ${arcs.length} arcs, commit ${project.commit.slice(0, 12)}`);
  }
  console.log(`arms: ${arms.join(', ')}`);
  if (errors) console.error(`${errors} error(s)`);
  return errors ? 1 : 0;
}

/** A scripted stand-in for the agent, to test the pipeline without a model. */
function replayAgent(dir: string, task: Task): AgentResult {
  const ws = workspaceDir(dir);
  const env = { ...process.env, ...GIT_IDENTITY };
  let final = '';
  if (task.source?.commit) {
    must(`git -C ${JSON.stringify(ws)} cherry-pick --no-commit ${task.source.commit}`, { env });
    sh(`git -C ${JSON.stringify(ws)} reset -q`, { env, quiet: true });
    final = 'Implemented the change as requested.';
  } else if (task.kind === 'conflict') {
    final = `I did not make this change: it conflicts with the recorded rule ${task.governing_rules?.[0]} (${task.governing_rules?.[0]}). Please confirm whether the rule should change.`;
  } else {
    final = 'Nothing to do in replay mode.';
  }
  writeFileSync(join(dir, 'transcript.jsonl'), JSON.stringify({ type: 'result', result: final, num_turns: 1, total_cost_usd: 0, usage: {} }) + '\n');
  return { code: 0, timed_out: false, usage: { input_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, output_tokens: 0, cost_usd: 0, tool_calls: 0, turns: 1, wall_seconds: 0 }, terminal_reason: 'replay', final_answer: final, tools_available: ['Edit', 'Bash', ...(process.env.CIB_REPLAY_KIBI ? ['mcp__kibi__kb_search'] : [])], tool_calls: [], permission_denials: 0 };
}

/** Scripted stand-in for an arc session: cherry-picks the step's source commit when it has one. */
function replayStep(ws: string, step: ArcStep, dir: string): AgentResult {
  const env = { ...process.env, ...GIT_IDENTITY };
  let final = 'Nothing to do in replay mode.';
  if (step.source?.commit) {
    must(`git -C ${JSON.stringify(ws)} cherry-pick --no-commit -X theirs ${step.source.commit}`, { env });
    sh(`git -C ${JSON.stringify(ws)} reset -q`, { env, quiet: true });
    // A picked change that adds dependencies needs them installed, as the agent would have done.
    const touched = sh(`git -C ${JSON.stringify(ws)} diff --name-only HEAD`, { quiet: true }).stdout;
    if (/(^|\n)(.*\/)?package\.json\n|pnpm-lock\.yaml|package-lock\.json|yarn\.lock/.test(touched + '\n') && v.project) {
      const r = sh(loadProject(v.project).setup.install.replace('--frozen-lockfile', ''), { cwd: ws, quiet: true, timeoutMs: 10 * 60_000 });
      if (r.code !== 0) sh(`echo "replay install failed: ${r.stderr.slice(-500).replace(/"/g, '')}" >&2`, { quiet: true });
    }
    final = 'Implemented the change as requested.';
  } else if (step.kind === 'probe') {
    final = 'I did not make this change: it conflicts with a recorded project decision. Please confirm whether the decision should change.';
  }
  writeFileSync(join(dir, 'transcript.jsonl'), JSON.stringify({ type: 'result', result: final, num_turns: 1, total_cost_usd: 0, usage: {} }) + '\n');
  return { code: 0, timed_out: false, usage: { input_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, output_tokens: 0, cost_usd: 0, tool_calls: 0, turns: 1, wall_seconds: 0 }, terminal_reason: 'replay', final_answer: final, tools_available: ['Edit', 'Bash', ...(process.env.CIB_REPLAY_KIBI ? ['mcp__kibi__kb_search'] : []), ...(process.env.CIB_REPLAY_MCP ? [`mcp__${process.env.CIB_REPLAY_MCP}__x`] : [])], tool_calls: [], permission_denials: 0 };
}

async function runOne(projectName: string, task: Task, arm: string, attempt: number): Promise<RunRecord> {
  const project = loadProject(projectName);
  const spec: RunSpec = { project: projectName, task: task.id, arm, attempt, agent: agentConfig() };
  const id = `${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}-a${attempt}`;
  const dir = runDir(spec, id);
  mkdirSync(dir, { recursive: true });
  const record: RunRecord = { id, spec, base_commit: '', started_at: new Date().toISOString() };
  writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
  log(`run ${task.id} / ${arm} / attempt ${attempt} → ${dir}`);
  const { base, rules } = prepareWorkspace(dir, project, task, arm, log);
  record.base_commit = base;
  log('agent start');
  const agent = v.agent === 'replay' ? replayAgent(dir, task) : await runAgentWithHost(dir, arm, spec.agent, task.prompt, loadArmHost(arm));
  record.usage = agent.usage;
  record.terminal_reason = agent.terminal_reason;
  record.final_answer = agent.final_answer;
  (record as any).first_rule_lookup_turn = agent.first_rule_lookup_turn;
  (record as any).first_edit_turn = agent.first_edit_turn;
  (record as any).tools_available = agent.tools_available;
  writeFileSync(join(dir, 'agent.json'), JSON.stringify(agent, null, 2));
  log(`agent done: ${agent.terminal_reason ?? agent.code} in ${agent.usage.wall_seconds}s, $${agent.usage.cost_usd.toFixed(3)}, ${agent.usage.tool_calls} tool calls`);
  record.grade = await gradeRun({ dir, project, task, rules, arm, agent, judgeModel: v['judge-model']!, skipJudge: v['skip-judge'] });
  record.finished_at = new Date().toISOString();
  if (existsSync(join(dir, 'hygiene.json'))) { try { record.hygiene = JSON.parse(readFileSync(join(dir, 'hygiene.json'), 'utf8')); } catch { /* keep raw file */ } }
  writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
  log(`graded: ${record.grade.outcome} (${record.grade.pass ? 'pass' : 'fail'})`);
  if (!v.keep) rmSync(workspaceDir(dir), { recursive: true, force: true });
  return record;
}

async function main(): Promise<number> {
  if (!cmd || v.help) { console.log(HELP); return 0; }
  if (cmd === 'validate') return validate();
  if (cmd === 'list') {
    for (const p of v.project ? [v.project] : listProjects()) {
      for (const t of loadTasks(p)) console.log(`${p}\t${t.kind}\t${t.id}\t${t.governing_rules?.join(',') ?? ''}`);
      for (const a of loadArcs(p)) console.log(`${p}\tarc:${a.family}\t${a.id}\t${a.steps.map((s) => `${s.id}(${s.kind})`).join(' ')}`);
    }
    console.log(`arms: ${listArms().join(', ')}`);
    return 0;
  }
  if (cmd === 'prepare') {
    if (!v.project || !v.task || !v.arm) throw new Error('prepare needs --project, --task, --arm');
    const project = loadProject(v.project);
    const task = loadTask(v.project, v.task);
    const dir = v.out ?? join(RUNS_DIR, '_prepare', `${v.task}-${v.arm}`);
    rmSync(dir, { recursive: true, force: true });
    const { base } = prepareWorkspace(dir, project, task, v.arm, log);
    console.log(`workspace ${workspaceDir(dir)} at ${base} (branch ${BASE_BRANCH})`);
    return 0;
  }
  if (cmd === 'run') {
    if (!v.project || !v.task || !v.arm) throw new Error('run needs --project, --task, --arm');
    const tasks = v.task === 'all' ? loadTasks(v.project) : [loadTask(v.project, v.task)];
    const arms = v.arm.split(',');
    const results: RunRecord[] = [];
    for (const task of tasks) for (const arm of arms) for (let a = 1; a <= Number(v.attempts); a++) {
      try { results.push(await runOne(v.project, task, arm, a)); }
      catch (e) { log(`run failed: ${task.id}/${arm}/${a}: ${(e as Error).message}`); }
    }
    for (const s of summarize(results)) console.log(`${s.arm}: ${s.pass}/${s.runs - s.invalid} pass, $${s.cost_usd.toFixed(2)}`);
    return 0;
  }
  if (cmd === 'run-arc') {
    if (!v.project || !v.arc || !v.arm) throw new Error('run-arc needs --project, --arc, --arm');
    let arcs = v.arc === 'all' ? loadArcs(v.project) : [loadArc(v.project, v.arc)];
    if (v.family) arcs = arcs.filter((a) => a.family === v.family);
    const arms = v.arm.split(',');
    const results = [];
    for (const arc of arcs) for (const arm of arms) for (let a = 1; a <= Number(v.attempts); a++) {
      try { results.push(await runArc(v.project, arc, arm, a, { agent: agentConfig(), judgeModel: v['judge-model']!, skipJudge: v['skip-judge'], keep: v.keep, replay: v.agent === 'replay' ? replayStep : undefined, log })); }
      catch (e) { log(`arc failed: ${arc.id}/${arm}/${a}: ${(e as Error).message}`); }
    }
    for (const [key, c] of summarizeArcs(results)) { const [fam, arm] = key.split('\u0000'); if (fam === 'all') console.log(`${arm}: ${c.pass}/${c.arcs - c.invalid} arcs pass, $${c.cost_usd.toFixed(2)}`); }
    return 0;
  }
  if (cmd === 'grade') {
    if (!v.run) throw new Error('grade needs --run DIR');
    const record = JSON.parse(readFileSync(join(v.run, 'run.json'), 'utf8')) as RunRecord;
    const agent = JSON.parse(readFileSync(join(v.run, 'agent.json'), 'utf8')) as AgentResult;
    const project = loadProject(record.spec.project);
    const task = loadTask(record.spec.project, record.spec.task);
    if (!existsSync(workspaceDir(v.run))) throw new Error('workspace was not kept; re-run with --keep to re-grade');
    sh(`git -C ${JSON.stringify(workspaceDir(v.run))} stash list`, { quiet: true });
    const rules = existsSync(join(v.run, 'rules')) ? loadRulesDir(join(v.run, 'rules')) : loadRules(record.spec.project);
    record.grade = await gradeRun({ dir: v.run, project, task, rules, arm: record.spec.arm, agent, judgeModel: v['judge-model']!, skipJudge: v['skip-judge'] });
    writeFileSync(join(v.run, 'run.json'), JSON.stringify(record, null, 2));
    console.log(`${record.grade.outcome} (${record.grade.pass ? 'pass' : 'fail'})`);
    return 0;
  }
  if (cmd === 'rejudge') {
    const dirs: string[] = [];
    if (v.run) dirs.push(v.run);
    else if (v.project) {
      const root = join(RUNS_DIR, v.project);
      for (const task of readdirSync(root)) {
        if (task.startsWith('_') || !statSync(join(root, task)).isDirectory()) continue;
        for (const arm of readdirSync(join(root, task))) {
          if (!statSync(join(root, task, arm)).isDirectory()) continue;
          for (const id of readdirSync(join(root, task, arm))) if (existsSync(join(root, task, arm, id, 'agent.json'))) dirs.push(join(root, task, arm, id));
        }
      }
    } else throw new Error('rejudge needs --run DIR or --project P');
    // Arc runs: `--run` pointing at an arc run dir (has arc.json), or every arc run of the project.
    const arcDirs = dirs.filter((d) => existsSync(join(d, 'arc.json')));
    if (v.project && existsSync(join(RUNS_DIR, v.project, '_arcs'))) {
      const root = join(RUNS_DIR, v.project, '_arcs');
      for (const arc of readdirSync(root)) for (const arm of readdirSync(join(root, arc))) {
        if (!statSync(join(root, arc, arm)).isDirectory()) continue;
        for (const id of readdirSync(join(root, arc, arm))) if (existsSync(join(root, arc, arm, id, 'arc.json'))) arcDirs.push(join(root, arc, arm, id));
      }
    }
    for (const dir of arcDirs) await rejudgeArc(dir, v['judge-model']!);
    for (const dir of dirs) {
      if (existsSync(join(dir, 'arc.json'))) continue;
      const record = JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8')) as RunRecord;
      if (!record.grade || record.grade.invalid) continue;
      const agent = JSON.parse(readFileSync(join(dir, 'agent.json'), 'utf8')) as AgentResult;
      const task = loadTask(record.spec.project, record.spec.task);
      const rules = existsSync(join(dir, 'rules')) ? loadRulesDir(join(dir, 'rules')) : loadRules(record.spec.project);
      const diff = existsSync(join(dir, 'diff.patch')) ? readFileSync(join(dir, 'diff.patch'), 'utf8') : '';
      const before = record.grade.outcome;
      try {
      const verdict = await judgeRun({ dir, task, rules, arm: record.spec.arm, agent, diff, model: v['judge-model']!, ruleRecordChanged: record.grade.rule_record_changed });
      record.grade.judge = { answers: verdict.answers, model: v['judge-model']!, cost_usd: verdict.cost_usd };
      record.grade.notes = (record.grade.notes ?? []).filter((n) => !n.startsWith('conflict task implemented'));
      record.grade.outcome = decide(task, record.grade, verdict, record.grade.notes);
      record.grade.pass = (task.grading.accept as string[]).includes(record.grade.outcome);
      writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
      log(`${record.spec.task}/${record.spec.arm}: ${before} → ${record.grade.outcome}`);
      } catch (e) { log(`rejudge failed for ${dir}: ${(e as Error).message}`); }
    }
    return 0;
  }
  if (cmd === 'report') {
    for (const p of v.project ? [v.project] : listProjects()) {
      const runs = loadRuns(p);
      if (runs.length === 0) { continue; }
      const md = renderMarkdown(p, runs);
      mkdirSync(join(RUNS_DIR, p), { recursive: true });
      writeFileSync(join(RUNS_DIR, p, 'report.md'), md);
      writeFileSync(join(RUNS_DIR, p, 'report.json'), JSON.stringify({ project: p, arms: summarize(runs), runs: runs.map((r) => ({ id: r.id, task: r.spec.task, arm: r.spec.arm, attempt: r.spec.attempt, outcome: r.grade!.outcome, pass: r.grade!.pass, usage: r.usage })) }, null, 2));
      console.log(md);
    }
    for (const p of v.project ? [v.project] : listProjects()) {
      const arcRuns = loadArcRuns(p);
      if (arcRuns.length === 0) continue;
      const md = renderArcsMarkdown(p, arcRuns);
      mkdirSync(join(RUNS_DIR, p), { recursive: true });
      writeFileSync(join(RUNS_DIR, p, 'report-arcs.md'), md);
      writeFileSync(join(RUNS_DIR, p, 'report-arcs.json'), JSON.stringify({ project: p, runs: arcRuns.map((r) => ({ id: r.id, arc: r.spec.arc, family: r.spec.family, arm: r.spec.arm, attempt: r.spec.attempt, pass: r.pass, invalid: r.invalid, cost_usd: r.cost_usd, steps: r.steps.map((s) => ({ id: s.id, kind: s.kind, outcome: s.grade?.outcome, pass: s.grade?.pass, record_written: s.record_written, first_lookup_turn: s.first_lookup_turn, first_edit_turn: s.first_edit_turn, usage: s.usage })) })) }, null, 2));
      console.log(md);
    }
    return 0;
  }
  console.log(HELP);
  return 1;
}

main().then((code) => process.exit(code), (e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });

/** Re-runs the judge on every graded step of a finished arc run and re-applies the decision table. */
async function rejudgeArc(dir: string, judgeModel: string): Promise<void> {
  const record = JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8')) as ArcRunRecord;
  const arc = JSON.parse(readFileSync(join(dir, 'arc.json'), 'utf8')) as Arc;
  const firstBranch = arc.steps[0].branch ?? BASE_BRANCH;
  for (const rec of record.steps) {
    const step = arc.steps.find((s) => s.id === rec.id);
    const sdir = join(dir, 'steps', rec.id);
    if (!step || !rec.grade || rec.grade.invalid || !existsSync(join(sdir, 'agent.json'))) continue;
    const agent = JSON.parse(readFileSync(join(sdir, 'agent.json'), 'utf8')) as AgentResult;
    // Older runs did not keep lookup results and hook context; take them from the transcript.
    if (existsSync(join(sdir, 'transcript.jsonl'))) {
      const parsed = parseTranscript(readFileSync(join(sdir, 'transcript.jsonl'), 'utf8'));
      agent.tool_calls = parsed.tool_calls; agent.evidence = parsed.evidence; agent.first_rule_lookup_turn = parsed.first_rule_lookup_turn; agent.first_edit_turn = parsed.first_edit_turn;
      rec.first_lookup_turn = parsed.first_rule_lookup_turn; rec.first_edit_turn = parsed.first_edit_turn;
      writeFileSync(join(sdir, 'agent.json'), JSON.stringify(agent, null, 2));
    }
    const diff = existsSync(join(sdir, 'diff.patch')) ? readFileSync(join(sdir, 'diff.patch'), 'utf8') : '';
    const branchNote = arc.family === 'branch' && rec.branch !== firstBranch ? `This session runs on branch ${rec.branch}; the recorded decision was made on branch ${firstBranch} and has not been merged here, so it does not hold on this branch.` : undefined;
    const before = rec.grade.outcome;
    try {
      const verdict = await judgeStep({ dir: sdir, arc, step, agent, diff, model: judgeModel, recordWritten: rec.record_written, branchNote });
      rec.grade.judge = { answers: verdict.answers, model: judgeModel, cost_usd: verdict.cost_usd };
      rec.grade.notes = (rec.grade.notes ?? []).filter((n) => !n.startsWith('probe implemented without'));
      rec.grade.outcome = decideStep(arc, step, rec.grade, verdict, rec.grade.notes);
      rec.grade.pass = (step.grading.accept as string[]).includes(rec.grade.outcome);
      log(`${record.spec.arc}/${record.spec.arm}/${rec.id}: ${before} → ${rec.grade.outcome}`);
    } catch (e) { log(`rejudge failed for ${sdir}: ${(e as Error).message}`); }
  }
  record.pass = !record.invalid && record.steps.length === arc.steps.length && record.steps.every((s) => s.grade?.pass || s.terminal_reason === 'scripted');
  writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
}
