// Static checks of one arc file: shape, the decision each step is about, prompt hygiene.
// What an arm's container holds is checked by the equivalence audit (audit.ts), not here.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { PROJECTS_DIR } from './config.ts';
import { ARC_PATTERNS } from './types.ts';
import type { Arc, ArcIntent, ProjectConfig } from './types.ts';

const TOOL_WORDS = ['kibi', 'requirement', 'knowledge base', 'AGENTS.md', 'CLAUDE.md', 'benchmark', 'tracker', 'memory'];
const HINT_WORDS = ['decision', 'decided', 'recorded'];
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Words a prompt must not use, less the project's own product vocabulary (its name, and `product_terms` in project.yaml). */
function forbidden(words: string[], project: Pick<ProjectConfig, 'name' | 'product_terms'>): RegExp | undefined {
  const own = new Set([project.name, ...(project.product_terms ?? [])].map((w) => w.toLowerCase()));
  const kept = words.filter((w) => !own.has(w.toLowerCase()));
  return kept.length ? new RegExp(`\\b(${kept.map(esc).join('|')})\\b`, 'i') : undefined;
}

function intentErrors(where: string, intent: ArcIntent | undefined, arcDir: string | undefined): string[] {
  const errors: string[] = [];
  if (!intent?.statement?.trim() || !intent?.reason?.trim()) errors.push(`${where}: intent needs statement and reason`);
  if (intent?.tests?.length && !intent.tests_commit && !existsSync(join(arcDir ?? '', 'tests'))) errors.push(`${where}: intent.tests without tests_commit or a tests/ directory`);
  if (intent?.requirement !== undefined && (typeof intent.requirement !== 'string' || !intent.requirement.trim())) errors.push(`${where}: intent.requirement must be the id of a recorded entry`);
  return errors;
}

export function validateArc(arc: Arc, project: Pick<ProjectConfig, 'name' | 'product_terms'>): string[] {
  const p = project.name;
  const at = `${p}/arcs/${arc.id}`;
  const errors: string[] = [];
  if (arc.project !== p) errors.push(`${at}: project field is '${arc.project}'`);
  if (!arc.base_commit) errors.push(`${at}: no base_commit`);
  if (arc.base_patch !== undefined && !existsSync(join(PROJECTS_DIR, p, arc.base_patch))) errors.push(`${at}: base_patch ${arc.base_patch} not found in the project directory`);
  if (arc.kb_variant !== undefined && !/^[a-z0-9][a-z0-9-]*$/.test(String(arc.kb_variant))) errors.push(`${at}: kb_variant '${arc.kb_variant}' must be lower-case letters, digits and hyphens`);
  errors.push(...intentErrors(at, arc.intent, arc._dir));
  // The user states the arc's decision in an intent step, if at all, before anything else happens.
  const intentAt = (arc.steps ?? []).findIndex((st) => st.kind === 'intent' && !st.intent);
  if (!arc.steps?.length) errors.push(`${at}: no steps`);
  else if (intentAt > 0) errors.push(`${at}: the intent step must be the first step`);
  if (!arc.steps?.some((st) => st.kind === 'probe')) errors.push(`${at}: no probe step`);
  for (const pat of arc.pattern === undefined ? [] : Array.isArray(arc.pattern) ? arc.pattern : [arc.pattern]) {
    if (!(ARC_PATTERNS as string[]).includes(pat)) errors.push(`${at}: unknown pattern '${pat}' (one of ${ARC_PATTERNS.join(', ')})`);
  }
  if (arc.tier !== undefined && arc.tier !== 'easy' && arc.tier !== 'hard') errors.push(`${at}: tier is '${arc.tier}' (easy or hard)`);
  const tools = forbidden(TOOL_WORDS, project);
  const hints = forbidden(HINT_WORDS, project);
  const stepIds = new Set<string>();
  // Intent steps seen so far: a decision stated in the arc is stated before the step that refers to it.
  const intentSteps = new Set<string>();
  for (const st of arc.steps ?? []) {
    const refs = [...(st.intent?.stated_in ? [st.intent.stated_in] : []), ...(st.intent?.supersedes ?? [])];
    for (const ref of refs) if (!intentSteps.has(ref)) errors.push(`${at}/${st.id}: intent refers to '${ref}', which is not an earlier intent step of this arc`);
    if (st.intent?.stated_in && st.intent.requirement) errors.push(`${at}/${st.id}: a decision stated in the arc (stated_in) has no recorded entry at setup (requirement)`);
    if (st.kind === 'intent') intentSteps.add(st.id);
    const sat = `${at}/${st.id}`;
    if (stepIds.has(st.id)) errors.push(`${sat}: duplicate step id`);
    stepIds.add(st.id);
    if (st.script && !existsSync(join(arc._dir ?? '', st.script))) errors.push(`${sat}: script ${st.script} not found`);
    if (!st.script && !st.grading?.accept?.length) errors.push(`${sat}: no accept set`);
    if (st.deliverable !== undefined && st.deliverable !== 'tests') errors.push(`${sat}: deliverable is '${st.deliverable}' (only 'tests', or leave it out)`);
    if (st.deliverable === 'tests' && st.kind === 'probe') errors.push(`${sat}: a probe asks for a change in behaviour, not only a test (deliverable: tests)`);
    if (st.intent !== undefined) errors.push(...intentErrors(sat, st.intent, arc._dir));
    if (st.intent !== undefined && st.script) errors.push(`${sat}: a scripted step is not graded and takes no intent`);
    if (st.kind !== 'intent' && tools?.test(st.prompt ?? '')) errors.push(`${sat}: prompt mentions tools or the benchmark`);
    // Questions asked from the intent side (rationale, navigation) may name the decision; work requests must not.
    const question = st.kind === 'probe' && (arc.family === 'rationale' || arc.family === 'navigation' || (st.require ?? []).some((k) => /^(reason_|names_)/.test(k)));
    if (st.kind !== 'intent' && !question && hints?.test(st.prompt ?? '')) errors.push(`${sat}: prompt hints that a decision exists`);
  }
  return errors;
}
