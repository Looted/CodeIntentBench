// How a rule is written into each passive arm's container. Every renderer carries the same
// facts: the decision, its reason, where it applies, and its standing (status, firmness, who
// recorded it and when, what it supersedes and what supersedes it). The equivalence audit
// (audit.ts) reads these containers back and checks each fact is there.
import { isCurrent } from './kb-rules.ts';
import type { Rule } from './types.ts';

const day = (iso?: string) => (iso ? iso.slice(0, 10) : undefined);

/** `Status: superseded (not current)`; the bare status alone does not say whether the decision still holds. */
export function statusLine(rule: Rule): string | undefined {
  if (!rule.status) return undefined;
  const note = isCurrent(rule) ? 'current' : 'not current';
  return `Status: ${rule.status} (${note})${rule.status_reason ? `. ${rule.status_reason}` : ''}`;
}

/**
 * What each firmness asks of the reader, in the words of Kibi's own agent skill (kibi-decisions and
 * kibi-usage, "Decision firmness") and hook label ("firm: ask before changing"), so that no container
 * gives stronger or weaker guidance than Kibi gives its own agent.
 */
export const FIRMNESS_GLOSS: Record<string, string> = {
  firm: 'a person set it; follow it, and ask before changing it',
  default: 'a delegated or agent choice; follow it, and supersede it only on evidence that it is wrong',
  exploratory: 'a flagged guess; revisit it when you touch the area',
};
export const FIRMNESS_LEGEND = `firm: ${FIRMNESS_GLOSS.firm}. default: ${FIRMNESS_GLOSS.default} (a failing test, a measured cost, a constraint it missed). exploratory: ${FIRMNESS_GLOSS.exploratory}.`;

export function firmnessLine(rule: Rule): string | undefined {
  if (!rule.firmness) return undefined;
  const gloss = FIRMNESS_GLOSS[rule.firmness];
  return `Firmness: ${rule.firmness}${gloss ? ` (${gloss})` : ''}`;
}

export function originLine(rule: Rule): string | undefined {
  const o = rule.origin;
  if (!o) return undefined;
  const parts: string[] = [];
  if (o.recorded_at) parts.push(day(o.recorded_at)!);
  if (o.kind) parts.push(`by ${o.kind}`);
  if (o.by) parts.push(`approved by ${o.by}`);
  if (o.updated_at) parts.push(`updated ${day(o.updated_at)}`);
  const head = parts.join(', ');
  const ref = o.ref ? `${head ? '; ' : ''}source: ${o.ref.replace(/\s+/g, ' ')}` : '';
  return head || ref ? `Recorded: ${head}${ref}` : undefined;
}

/** The standing of a rule, one fact per line; empty for a hand-written rule that records none. */
export function standingLines(rule: Rule): string[] {
  const out: string[] = [];
  const push = (l?: string) => { if (l) out.push(l); };
  push(statusLine(rule));
  push(firmnessLine(rule));
  push(originLine(rule));
  if (rule.supersedes?.length) out.push(`Supersedes: ${rule.supersedes.join(', ')}`);
  if (rule.superseded_by?.length) out.push(`Superseded by: ${rule.superseded_by.join(', ')}`);
  return out;
}

export function whereLines(rule: Rule): string[] {
  const syms = rule.scope.symbols?.length ? ` (${rule.scope.symbols.join(', ')})` : '';
  return rule.scope.paths.map((p) => `${p}${syms}`);
}

/**
 * The `agents-md` arm: every rule, rendered once, as a context file a team
 * might keep by hand. Same content as the other arms, static delivery.
 */
export function renderAgentsMd(projectName: string, rules: Rule[]): string {
  const lines: string[] = [];
  lines.push(`# ${projectName}: project rules`);
  lines.push('');
  lines.push('These rules describe decisions this project has made. Changes that conflict with one of them need an explicit decision first, and the rule below must be updated with the change.');
  if (rules.some((r) => r.status || r.firmness)) {
    lines.push('');
    lines.push('Each rule gives its status (a rule marked not current was closed or replaced and no longer holds; "Superseded by" names its replacement) and its firmness. ' + FIRMNESS_LEGEND);
  }
  lines.push('');
  for (const rule of rules) {
    lines.push(`## ${rule.id}`);
    lines.push('');
    lines.push(rule.statement.trim());
    if (rule.rationale) {
      lines.push('');
      lines.push(`Why: ${rule.rationale.trim()}`);
    }
    lines.push('');
    lines.push(`Where: ${whereLines(rule).join(', ')}`);
    const standing = standingLines(rule);
    if (standing.length) { lines.push(''); for (const l of standing) lines.push(l, ''); lines.pop(); }
    lines.push('');
  }
  return lines.join('\n');
}

export function renderClaudeMdPointer(): string {
  return '@AGENTS.md\n';
}

/** The `docs` arm: one decision file per rule under docs/decisions. */
export function renderDecisionDoc(rule: Rule): string {
  const lines = [`# ${rule.id}`, ''];
  const standing = standingLines(rule);
  if (standing.length) lines.push(...standing.map((l) => `- ${l}`), '');
  lines.push('## Decision', '', rule.statement.trim(), '');
  if (rule.rationale) lines.push('## Why', '', rule.rationale.trim(), '');
  lines.push('## Where', '', ...whereLines(rule).map((p) => `- ${p}`), '');
  return lines.join('\n');
}

export function decisionDocName(rule: Rule, index: number): string {
  return `${String(index + 1).padStart(4, '0')}-${rule.id}.md`;
}

const SEED_DATE = '2026-01-01T00:00:00.000Z';
const validDate = (s?: string) => (s && !Number.isNaN(Date.parse(s)) ? new Date(s).toISOString() : undefined);

export interface TrackerIssue { id: string; title: string; body: string; status: 'open' | 'closed'; labels: string[]; comments: Array<{ at: string; text: string }>; created_at: string; updated_at: string }

/** A short headline: the statement's first clause, at most about 90 characters, cut at a word. */
export function headline(rule: Rule): string {
  const s = rule.statement.replace(/\s+/g, ' ').trim();
  const first = s.split(/;\s|\.\s|:\s/)[0].replace(/[.;:]$/, '');
  if (first.length <= 90) return first;
  const cut = first.slice(0, 90);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 40))}…`;
}

/** A tracker issue's title: the headline a person would write, with the decision's id as the issue key. */
export function issueTitle(rule: Rule): string {
  return `${headline(rule)} [${rule.id}]`;
}

/** Is this the issue that holds the rule (its title carries the id as the key)? */
export function isIssueOf(title: string, rule: Rule): boolean {
  return title.endsWith(`[${rule.id}]`);
}

/** The `tracker` arm: a rule as a resolved issue, the way a team files a decision. The issue is closed; the decision's own status is in the body and a label. */
export function trackerIssue(rule: Rule, index: number): TrackerIssue {
  const standing = standingLines(rule);
  const body = [`Decision: ${rule.statement.trim()}`, ...(rule.rationale ? [`Why: ${rule.rationale.trim()}`] : []), `Where: ${whereLines(rule).join(', ')}`, ...(standing.length ? [standing.join('\n')] : [])].join('\n\n');
  const labels = ['decision', ...(rule.components ?? []).map((c) => `component:${c}`), ...(rule.status ? [`decision-status:${rule.status}`] : []), ...(rule.firmness ? [`firmness:${rule.firmness}`] : [])];
  const created = validDate(rule.origin?.recorded_at) ?? SEED_DATE;
  return { id: `T-${index + 1}`, title: issueTitle(rule), body, status: 'closed', labels, comments: [], created_at: created, updated_at: validDate(rule.origin?.updated_at) ?? created };
}

export interface MemoryNote { id: string; text: string; tags: string[]; created_at: string }

/** The `memory` arm: a rule as one free-text note. */
export function memoryNote(rule: Rule, index: number): MemoryNote {
  const standing = standingLines(rule);
  const text = `${rule.statement.trim()}${rule.rationale ? ` Why: ${rule.rationale.trim()}` : ''} Applies to: ${whereLines(rule).join(', ')}.${standing.length ? ` ${standing.join('. ')}. Id: ${rule.id}.` : ''}`;
  const tags = ['decision', ...(rule.status ? [rule.status] : []), ...(rule.firmness ? [rule.firmness] : [])];
  return { id: `M-${index + 1}`, text, tags, created_at: validDate(rule.origin?.recorded_at) ?? SEED_DATE };
}
