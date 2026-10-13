// A file-backed notes memory over MCP: the `memory` arm's stand-in for memory
// databases (mem0, Zep, an agent's auto-memory). The agent saves free-text
// notes and searches them; ranking is keyword-based (TF-IDF), deterministic and
// offline, which is weaker than an embedding store at paraphrase but identical
// in what matters here: nothing fires on its own, the agent must ask.
// Usage: node memory-mcp.ts --store FILE
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { rank, serve, storePath } from './mcp-lite.ts';

interface Note { id: string; text: string; tags: string[]; created_at: string }
interface Store { next: number; notes: Note[] }

const file = storePath();
const load = (): Store => (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : { next: 1, notes: [] });
const save = (s: Store) => writeFileSync(file, JSON.stringify(s, null, 2));
const render = (n: Note) => `${n.id} (${n.created_at.slice(0, 10)}${n.tags.length ? `, ${n.tags.join(', ')}` : ''}): ${n.text}`;

serve('memory', '0.1.0', [
  {
    name: 'memory_search',
    description: 'Search saved memories by meaning keywords. Returns the most relevant notes first.',
    inputSchema: { type: 'object', properties: { query: { type: 'string' }, limit: { type: 'number', default: 8 } }, required: ['query'] },
    handler: ({ query, limit }) => {
      const s = load();
      const hits = rank(String(query), s.notes.map((n) => `${n.text}\n${n.tags.join(' ')}`), Number(limit ?? 8));
      if (hits.length === 0) return `No memories match "${query}" (${s.notes.length} saved).`;
      return hits.map((h) => render(s.notes[h.index])).join('\n');
    },
  },
  {
    name: 'memory_save',
    description: 'Save a memory: a decision, a reason, a constraint or a fact worth knowing in a later session. One note per fact.',
    inputSchema: { type: 'object', properties: { text: { type: 'string' }, tags: { type: 'array', items: { type: 'string' } } }, required: ['text'] },
    handler: ({ text, tags }) => {
      const s = load();
      const note: Note = { id: `M-${s.next++}`, text: String(text), tags: Array.isArray(tags) ? tags.map(String) : [], created_at: new Date().toISOString() };
      s.notes.push(note); save(s);
      return `Saved ${note.id}`;
    },
  },
  {
    name: 'memory_list',
    description: 'List all saved memories, newest first.',
    inputSchema: { type: 'object', properties: { limit: { type: 'number', default: 50 } } },
    handler: ({ limit }) => {
      const list = load().notes.slice().reverse().slice(0, Number(limit ?? 50));
      return list.length ? list.map(render).join('\n') : 'No memories saved.';
    },
  },
  {
    name: 'memory_delete',
    description: 'Delete a memory by id (for example when it is superseded).',
    inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
    handler: ({ id }) => {
      const s = load();
      const before = s.notes.length;
      s.notes = s.notes.filter((n) => n.id !== id);
      if (s.notes.length === before) throw new Error(`no memory ${id}`);
      save(s);
      return `Deleted ${id}`;
    },
  },
]);
