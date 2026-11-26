// Mechanical facts about a session, read from its transcripts and diff, that the outcome classes need:
// whether the agent edited source before the user first replied (S versus R), and whether it changed
// the governing entry of the store or linked to it (D).
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { NON_SOURCE } from './grade.ts';

const EDIT_TOOLS = new Set(['Edit', 'Write', 'MultiEdit', 'NotebookEdit']);

function events(file: string): any[] {
  if (!existsSync(file)) return [];
  const out: any[] = [];
  for (const line of readFileSync(file, 'utf8').split('\n')) { if (!line.trim()) continue; try { out.push(JSON.parse(line)); } catch { /* partial line */ } }
  return out;
}

function toolUses(file: string): Array<{ name: string; input: any }> {
  const out: Array<{ name: string; input: any }> = [];
  for (const ev of events(file)) {
    if (ev.type !== 'assistant' || ev.parent_tool_use_id) continue;
    for (const b of ev.message?.content ?? []) if (b.type === 'tool_use') out.push({ name: String(b.name ?? ''), input: b.input ?? {} });
  }
  return out;
}

/** Repo-relative form of a path the agent edited: relative to the workspace, else the part after `/workspace/`. */
function rel(path: string, ws: string): string {
  if (path.startsWith(ws + '/')) return path.slice(ws.length + 1);
  const i = path.lastIndexOf('/workspace/');
  return i >= 0 ? path.slice(i + '/workspace/'.length) : path.replace(/^\.\//, '');
}

/**
 * Source files the agent edited with an edit tool before the user's first reply. Empty when the session
 * had no reply: a session that edits and then undoes its own edit unprompted is not "reverted after reply".
 */
export function editsBeforeReply(sdir: string, ws: string): string[] {
  if (!existsSync(join(sdir, 'transcript-reply1.jsonl'))) return [];
  const files = new Set<string>();
  for (const u of toolUses(join(sdir, 'transcript.jsonl'))) {
    if (!EDIT_TOOLS.has(u.name)) continue;
    const p = String(u.input.file_path ?? u.input.notebook_path ?? '');
    if (!p) continue;
    const r = rel(p, ws);
    if (!NON_SOURCE.test(r)) files.add(r);
  }
  return [...files];
}

/** Forms an entry id takes in the arms' stores (stores seeded before Nov 26 titled tracker issues with the id's words). */
export function idForms(id: string): string[] {
  return [...new Set([id, id.replace(/-/g, ' '), id.toUpperCase().replace(/-/g, ' ')])];
}

const STORE_WRITE = /^(mcp__.*__)?(tracker_create_issue|tracker_update_issue|memory_save|memory_delete|kb_upsert|kb_delete|kb_supersede|kb_link|kb_record|issue_write|add_memory|update_memory|delete_memory|bm_write|bm_edit|bm_delete|bm_move)$|kb_upsert|kb_update/;

/**
 * Did the session change the governing entry, or write a new entry that links to it? Read from the
 * store writes in the transcripts (tracker, memory, Kibi tools), from the store files in the diff
 * (decision records, AGENTS.md, .kb), and for the comments arm from the hunks around the entry's
 * comment block. `keys` are the entry's id forms plus, for external stores, the id of the item that
 * holds it (T-12, M-40).
 */
export function governingTouched(sdir: string, diff: string, arm: string, keys: string[]): boolean {
  if (keys.length === 0) return false;
  const hit = (t: string) => keys.some((k) => t.includes(k));
  const transcripts = ['transcript.jsonl', ...Array.from({ length: 10 }, (_, i) => `transcript-reply${i + 1}.jsonl`)];
  for (const f of transcripts) {
    for (const u of toolUses(join(sdir, f))) {
      if (STORE_WRITE.test(u.name) && hit(JSON.stringify(u.input))) return true;
      // Kibi's CLI writes through Bash as well.
      if (u.name === 'Bash' && /(^|[\s;&|(])kibi\s+(upsert|supersede|link|update)/.test(String(u.input.command ?? '')) && hit(String(u.input.command))) return true;
      // beads writes through its CLI; Claude Code's auto memory is files the agent edits.
      if (u.name === 'Bash' && /(^|[\s;&|(])bd\s+(create|update|close|reopen|comments?|edit|dep|label)/.test(String(u.input.command ?? '')) && hit(String(u.input.command))) return true;
      if (/^(Edit|MultiEdit|Write)$/.test(u.name) && /(^|\/)claude-memory\//.test(String(u.input.file_path ?? '')) && hit(JSON.stringify(u.input))) return true;
    }
  }
  const storeFile = /^(\.kb\/|\.beads\/|docs\/decisions\/|AGENTS\.md$|CLAUDE\.md$)/;
  let file = '';
  let hunk: string[] = [];
  const flush = () => {
    const changed = hunk.filter((l) => /^[+-]/.test(l));
    if (!changed.length) return false;
    if (storeFile.test(file) && changed.some(hit)) return true;
    // Comments arm: a change inside the hunk that holds the entry's comment block.
    if (arm === 'comments' && hunk.some((l) => keys.some((k) => l.includes(`Decision ${k}`))) ) return true;
    if (arm === 'comments' && changed.some((l) => /^\+\s*\/\//.test(l) && hit(l))) return true;
    return false;
  };
  for (const line of diff.split('\n')) {
    if (line.startsWith('diff --git ')) { if (flush()) return true; hunk = []; file = line.replace(/^diff --git a\/(\S+) b\/.*$/, '$1'); continue; }
    if (line.startsWith('@@')) { if (flush()) return true; hunk = []; continue; }
    if (line.startsWith('+++') || line.startsWith('---')) continue;
    hunk.push(line);
  }
  return flush();
}

/** Ids of items in an external store file (tracker.json, memory.json) whose text holds one of the id forms. */
export function externalItemIds(dir: string, forms: string[]): string[] {
  const out: string[] = [];
  for (const [f, key] of [['tracker.json', 'issues'], ['memory.json', 'notes']] as const) {
    const p = join(dir, f);
    if (!existsSync(p)) continue;
    try {
      const items = JSON.parse(readFileSync(p, 'utf8'))[key] ?? [];
      for (const it of items) if (forms.some((k) => JSON.stringify(it).includes(k)) && it.id) out.push(String(it.id));
    } catch { /* not JSON */ }
  }
  return out;
}
