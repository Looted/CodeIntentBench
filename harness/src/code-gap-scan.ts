// Usage: node code-gap-scan.ts <memory.json> <embedModule|-> <symbols.yaml> <checkout> [--body] [--all]
// Where a code-gap probe could exist: for every `implements` link of the knowledge base, the rank of the
// linked decision when the store is searched with the words of the code alone. The query is the linked
// symbol's name and its file's name, split into words (ensureUserIsInOrganization organizations.usecases
// -> "ensure user is in organization organizations usecases"); with --body the identifiers of the symbol's
// declaration are added. Ranks as in gap-check.ts: keywords (memory, tracker) and keywords plus embeddings
// (memory-embed). A code-gap probe needs the decision outside the top 8 in both, and also for the request.
// Prints the links outside the top 8 in both (every link with --all) and a count.
// <memory.json> is a seeded store (`cib audit --arm memory-embed --keep`), <checkout> the project at the base.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { rank } from './arm-tools/mcp-lite.ts';

const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith('--')));
const [store, embed, symbolsFile, checkout] = argv.filter((a) => !a.startsWith('--'));
const notes = (JSON.parse(readFileSync(store, 'utf8')).notes as Array<{ text: string; tags: string[] }>);
const docs = notes.map((n) => `${n.text}\n${n.tags.join(' ')}`);
const model = embed && embed !== '-' ? (await import(embed)).loadStaticModel() : undefined;
const vectors = model ? docs.map((d) => model.encode(d) as number[]) : [];
const words = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[^A-Za-z0-9]+/g, ' ').toLowerCase().trim();

/** The declaration of an exported symbol: from its `export` line to the next top-level declaration. */
function declaration(src: string, name: string): string {
  const m = new RegExp(`^export (?:async )?(?:function|const|type|interface|class) ${name}\\b`, 'm').exec(src);
  if (!m) return '';
  const rest = src.slice(m.index);
  const end = rest.slice(1).search(/^(?:export |async function |function |const |type |interface |class )/m);
  return end < 0 ? rest : rest.slice(0, end + 1);
}

function ranks(target: number, query: string): { kw: number; fused: number } {
  const kw = rank(query, docs, docs.length).map((h) => h.index);
  let fused = kw;
  if (model) {
    const qv = model.encode(query) as number[];
    const sem = vectors.map((v, i) => { let s = 0; for (let k = 0; k < v.length; k++) s += v[k] * qv[k]; return { i, s }; }).sort((a, b) => b.s - a.s).map((x) => x.i);
    const score = new Map<number, number>();
    kw.forEach((i, r) => score.set(i, (score.get(i) ?? 0) + 1 / (60 + r)));
    sem.forEach((i, r) => score.set(i, (score.get(i) ?? 0) + 1 / (60 + r)));
    fused = [...score.entries()].sort((a, b) => b[1] - a[1]).map(([i]) => i);
  }
  const at = (l: number[]) => { const k = l.indexOf(target); return k < 0 ? docs.length + 1 : k + 1; };
  return { kw: at(kw), fused: at(fused) };
}

const symbols = (parse(readFileSync(symbolsFile, 'utf8')).symbols ?? []) as Array<{ title: string; sourceFile?: string; relationships?: Array<{ type: string; target: string }> }>;
let links = 0;
const outside: string[] = [];
const decisions = new Set<string>();
for (const s of symbols) {
  for (const r of s.relationships ?? []) {
    if (r.type !== 'implements' || !s.sourceFile) continue;
    const target = notes.findIndex((n) => n.text.includes(`Id: ${r.target}.`));
    if (target < 0 || !notes[target].text.includes('Status: active')) continue;
    const file = join(checkout, s.sourceFile);
    const body = flags.has('--body') && existsSync(file) ? declaration(readFileSync(file, 'utf8'), s.title) : '';
    const base = s.sourceFile.split('/').pop()!.replace(/\.[a-z]+$/, '');
    const query = [words(s.title), words(base), [...new Set(words(body).split(' ').filter((w) => w.length > 2))].join(' ')].join(' ').trim();
    const { kw, fused } = ranks(target, query);
    links++;
    const line = `kw=${kw}\tfused=${fused}\t${r.target}\t${s.title}\t${s.sourceFile}`;
    if (flags.has('--all')) console.log(line);
    if (kw > 8 && fused > 8) { outside.push(line); decisions.add(r.target); }
  }
}
if (!flags.has('--all')) for (const l of outside) console.log(l);
console.log(`${outside.length} of ${links} links (${decisions.size} decisions) rank outside the top 8 by keywords and by keywords plus embeddings`);
