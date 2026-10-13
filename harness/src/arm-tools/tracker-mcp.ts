// A file-backed issue tracker over MCP: the `tracker` arm's stand-in for Jira,
// YouTrack or GitHub issues. Issues have a title, body, status, labels and
// comments; search is keyword-ranked over all of them. Nothing fires on its own:
// the agent has to think of consulting it. Usage: node tracker-mcp.ts --store FILE
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { rank, serve, storePath } from './mcp-lite.ts';

interface Issue { id: string; title: string; body: string; status: 'open' | 'closed'; labels: string[]; comments: Array<{ at: string; text: string }>; created_at: string; updated_at: string }
interface Store { next: number; issues: Issue[] }

const file = storePath();
const load = (): Store => (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : { next: 1, issues: [] });
const save = (s: Store) => writeFileSync(file, JSON.stringify(s, null, 2));
const now = () => new Date().toISOString();
const render = (i: Issue, full: boolean) => {
  const head = `${i.id} [${i.status}] ${i.title}${i.labels.length ? `  (${i.labels.join(', ')})` : ''}`;
  if (!full) return head;
  const comments = i.comments.map((c) => `  - ${c.at.slice(0, 10)}: ${c.text}`).join('\n');
  return `${head}\ncreated ${i.created_at.slice(0, 10)}, updated ${i.updated_at.slice(0, 10)}\n\n${i.body}${comments ? `\n\nComments:\n${comments}` : ''}`;
};

serve('tracker', '0.1.0', [
  {
    name: 'tracker_search',
    description: 'Search issues by keywords (title, body, comments, labels). Returns the best matches with their ids; use tracker_get for the full issue.',
    inputSchema: { type: 'object', properties: { query: { type: 'string' }, limit: { type: 'number', default: 10 } }, required: ['query'] },
    handler: ({ query, limit }) => {
      const s = load();
      const hits = rank(String(query), s.issues.map((i) => [i.title, i.body, i.labels.join(' '), ...i.comments.map((c) => c.text)].join('\n')), Number(limit ?? 10));
      if (hits.length === 0) return `No issues match "${query}" (${s.issues.length} issues in the tracker).`;
      return hits.map((h) => render(s.issues[h.index], false)).join('\n');
    },
  },
  {
    name: 'tracker_get',
    description: 'Read one issue in full by id.',
    inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
    handler: ({ id }) => {
      const i = load().issues.find((x) => x.id === id);
      if (!i) throw new Error(`no issue ${id}`);
      return render(i, true);
    },
  },
  {
    name: 'tracker_list',
    description: 'List issues, newest first, optionally filtered by status (open or closed) or label.',
    inputSchema: { type: 'object', properties: { status: { type: 'string', enum: ['open', 'closed'] }, label: { type: 'string' }, limit: { type: 'number', default: 20 } } },
    handler: ({ status, label, limit }) => {
      const list = load().issues.filter((i) => (!status || i.status === status) && (!label || i.labels.includes(label))).reverse().slice(0, Number(limit ?? 20));
      return list.length ? list.map((i) => render(i, false)).join('\n') : 'No issues.';
    },
  },
  {
    name: 'tracker_create_issue',
    description: 'Create an issue. Put the decision, its reason and the affected area in the body.',
    inputSchema: { type: 'object', properties: { title: { type: 'string' }, body: { type: 'string' }, labels: { type: 'array', items: { type: 'string' } } }, required: ['title', 'body'] },
    handler: ({ title, body, labels }) => {
      const s = load();
      const issue: Issue = { id: `T-${s.next++}`, title: String(title), body: String(body), status: 'open', labels: Array.isArray(labels) ? labels.map(String) : [], comments: [], created_at: now(), updated_at: now() };
      s.issues.push(issue); save(s);
      return `Created ${issue.id}: ${issue.title}`;
    },
  },
  {
    name: 'tracker_update_issue',
    description: 'Update an issue: add a comment, change its status (open/closed), replace its body or set labels.',
    inputSchema: { type: 'object', properties: { id: { type: 'string' }, comment: { type: 'string' }, status: { type: 'string', enum: ['open', 'closed'] }, body: { type: 'string' }, labels: { type: 'array', items: { type: 'string' } } }, required: ['id'] },
    handler: ({ id, comment, status, body, labels }) => {
      const s = load();
      const i = s.issues.find((x) => x.id === id);
      if (!i) throw new Error(`no issue ${id}`);
      if (comment) i.comments.push({ at: now(), text: String(comment) });
      if (status) i.status = status;
      if (body !== undefined) i.body = String(body);
      if (Array.isArray(labels)) i.labels = labels.map(String);
      i.updated_at = now(); save(s);
      return `Updated ${i.id} [${i.status}]`;
    },
  },
]);
