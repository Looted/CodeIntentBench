#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { runAgentWithHost, type AgentResult } from './agent.ts';
import { RUNS_DIR, listArms, listProjects, loadProject, loadRules, loadRulesDir, loadTask, loadTasks } from './config.ts';
import { gradeRun } from './grade.ts';
import { loadRuns, renderMarkdown, summarize } from './report.ts';
import { must, sh } from './shell.ts';
import type { AgentConfig, RunRecord, RunSpec, Task } from './types.ts';
import { BASE_BRANCH, GIT_IDENTITY, loadArmHost, prepareWorkspace, runDir, workspaceDir } from './workspace.ts';

const HELP = `CodeRuleBench harness

  crb validate                         check projects, rules and tasks
  crb list [--project P]               list tasks and arms
  crb prepare --project P --task T --arm A [--out DIR]
                                       build a workspace and stop (debugging arms)
  crb run --project P --task T|all --arm A[,B] [--attempts N] [--model M] [--effort E]
          [--max-turns N] [--timeout MIN] [--budget USD] [--judge-model M] [--agent claude|replay]
          [--permissions bypass|accept-edits] [--allowed-tools "Bash(pnpm:*),Bash(npx vitest:*)"]
          [--keep] [--skip-judge]
                                       prepare, run the agent, grade, record
  crb grade --run DIR [--judge-model M] re-grade an existing run directory
  crb report [--project P]             aggregate runs into runs/<project>/report.md

Environment: CRB_RUNS_DIR (default: <repo>/runs), CRB_CACHE_DIR (default: <repo>/cache).
Node 26 (or the project's runtime) must be on PATH before the project installs.
`;

const { values: v, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    project: { type: 'string' }, task: { type: 'string' }, arm: { type: 'string' }, out: { type: 'string' }, run: { type: 'string' },
    attempts: { type: 'string', default: '1' }, model: { type: 'string', default: 'claude-sonnet-5-5' }, effort: { type: 'string', default: 'low' },
    'max-turns': { type: 'string', default: '60' }, timeout: { type: 'string', default: '25' }, budget: { type: 'string' },
    'judge-model': { type: 'string', default: 'claude-sonnet-5-5' }, agent: { type: 'string', default: 'claude' },
    permissions: { type: 'string', default: 'bypass' }, 'allowed-tools': { type: 'string' },
    keep: { type: 'boolean', default: false }, 'skip-judge': { type: 'boolean', default: false }, help: { type: 'boolean', default: false },
  },
});
const cmd = positionals[0];
const log = (s: string) => process.stderr.write(`[crb] ${s}\n`);

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
    console.log(`${p}: ${rules.length} rules, ${tasks.length} tasks (${['history', 'conflict', 'governed', 'ungoverned'].map((k) => `${tasks.filter((t) => t.kind === k).length} ${k}`).join(', ')}), commit ${project.commit.slice(0, 12)}`);
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
  return { code: 0, timed_out: false, usage: { input_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, output_tokens: 0, cost_usd: 0, tool_calls: 0, turns: 1, wall_seconds: 0 }, terminal_reason: 'replay', final_answer: final, tools_available: ['Edit', 'Bash', ...(process.env.CRB_REPLAY_KIBI ? ['mcp__kibi__kb_search'] : [])], tool_calls: [], permission_denials: 0 };
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
    for (const p of v.project ? [v.project] : listProjects()) for (const t of loadTasks(p)) console.log(`${p}\t${t.kind}\t${t.id}\t${t.governing_rules?.join(',') ?? ''}`);
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
  if (cmd === 'report') {
    for (const p of v.project ? [v.project] : listProjects()) {
      const runs = loadRuns(p);
      if (runs.length === 0) { console.log(`${p}: no graded runs`); continue; }
      const md = renderMarkdown(p, runs);
      mkdirSync(join(RUNS_DIR, p), { recursive: true });
      writeFileSync(join(RUNS_DIR, p, 'report.md'), md);
      writeFileSync(join(RUNS_DIR, p, 'report.json'), JSON.stringify({ project: p, arms: summarize(runs), runs: runs.map((r) => ({ id: r.id, task: r.spec.task, arm: r.spec.arm, attempt: r.spec.attempt, outcome: r.grade!.outcome, pass: r.grade!.pass, usage: r.usage })) }, null, 2));
      console.log(md);
    }
    return 0;
  }
  console.log(HELP);
  return 1;
}

main().then((code) => process.exit(code), (e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
