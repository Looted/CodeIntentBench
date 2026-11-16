// Names an agent's final answer asserts (error codes, constants, functions, paths), checked against the
// project so the judge can tell a real name from an invented one. The judge sees no code; without this
// it graded names the agent itself had written in an earlier step as invented constraints.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { sh } from './shell.ts';

const q = (s: string) => JSON.stringify(s);
const MAX_NAMES = 40;

/** Identifier-like names in a text: `backticked` tokens and SCREAMING_CASE constants. Prose in backticks is skipped. */
export function answerNames(text: string): string[] {
  const out = new Set<string>();
  for (const m of text.matchAll(/`([^`\n]{2,100})`/g)) {
    let t = m[1].trim().replace(/\(\)$/, '').replace(/[.,:;]+$/, '');
    if (!/^[\w$@.\-/:#]+$/.test(t) || !/[A-Za-z]/.test(t) || t.length < 3) continue;
    if (/^\d/.test(t)) continue;
    out.add(t);
  }
  for (const m of text.matchAll(/\b[A-Z][A-Z0-9]*_[A-Z0-9_]{2,}\b/g)) out.add(m[0]);
  return [...out].slice(0, MAX_NAMES);
}

/** Path-like names are checked as files; everything else as text. A path also counts when its basename is a file. */
const isPath = (n: string) => n.includes('/') || /\.(ts|tsx|js|mjs|json|ya?ml|md)$/.test(n);

export interface NameCheck { found: string[]; missing: string[] }

/** Checks names against the live workspace: tracked and untracked files (ignored ones skipped), plus extra texts such as an external store. */
export function checkNamesInWorkspace(ws: string, names: string[], extraTexts: string[] = []): NameCheck {
  if (names.length === 0) return { found: [], missing: [] };
  const files = sh(`git -C ${q(ws)} ls-files -co --exclude-standard`, { quiet: true }).stdout.split('\n').filter(Boolean);
  const texts = names.filter((n) => !isPath(n));
  const hits = new Set<string>();
  if (texts.length) {
    const r = sh(`git -C ${q(ws)} grep --untracked -I -F -o -h ${texts.map((n) => `-e ${q(n)}`).join(' ')}`, { quiet: true });
    for (const l of r.stdout.split('\n')) if (l) hits.add(l);
  }
  return classify(names, (n) => hits.has(n) || extraTexts.some((t) => t.includes(n)), (n) => files.some((f) => f === n || f.endsWith(`/${n}`) || f.endsWith(n.replace(/^\.?\//, ''))));
}

/** Checks names without a workspace (re-judging): the base commit in the mirror, plus texts (diffs of every step so far, teammate scripts, the project's recorded decisions). */
export function checkNamesAtBase(mirror: string, commit: string, names: string[], texts: string[]): NameCheck {
  if (names.length === 0) return { found: [], missing: [] };
  const files = sh(`git -C ${q(mirror)} ls-tree -r --name-only ${commit}`, { quiet: true }).stdout.split('\n').filter(Boolean);
  const plain = names.filter((n) => !isPath(n));
  const hits = new Set<string>();
  if (plain.length) {
    const r = sh(`git -C ${q(mirror)} grep -I -F -o -h ${plain.map((n) => `-e ${q(n)}`).join(' ')} ${commit}`, { quiet: true });
    // `git grep <commit>` prefixes matches with "<commit>:" even with -h on some versions.
    for (const l of r.stdout.split('\n')) if (l) hits.add(l.replace(new RegExp(`^${commit}:`), ''));
  }
  const all = texts.join('\n');
  return classify(names, (n) => hits.has(n) || all.includes(n), (n) => files.some((f) => f === n || f.endsWith(`/${n}`)) || all.includes(n));
}

function classify(names: string[], textHit: (n: string) => boolean, pathHit: (n: string) => boolean): NameCheck {
  const found: string[] = [];
  const missing: string[] = [];
  for (const n of names) ((isPath(n) ? pathHit(n) || textHit(n) : textHit(n)) ? found : missing).push(n);
  return { found, missing };
}

/** Text of every recorded decision of a project (its rules directory), so a cited entry id or statement counts as found. */
export function projectRecordTexts(rulesDir: string): string[] {
  if (!existsSync(rulesDir)) return [];
  return readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).map((f) => readFileSync(join(rulesDir, f), 'utf8'));
}
