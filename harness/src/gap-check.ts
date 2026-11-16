// Usage: node gap-check.ts <memory.json> <embedModule|-> <requirementId> <query>...
// How far a request's own words are from its governing decision: the rank of the decision when the store
// is searched with the whole request, by keywords (the memory and tracker arms' ranking) and by keywords
// plus embeddings (memory-embed). A search-gap probe needs the decision outside the top 8 in both.
import { readFileSync } from 'node:fs';
import { rank } from './arm-tools/mcp-lite.ts';

const [store, embed, id, ...queries] = process.argv.slice(2);
const notes = (JSON.parse(readFileSync(store, 'utf8')).notes as Array<{ id: string; text: string; tags: string[] }>);
const docs = notes.map((n) => `${n.text}\n${n.tags.join(' ')}`);
const target = notes.findIndex((n) => n.text.includes(id) || n.tags.includes(id) || JSON.stringify(n).includes(id));
const model = embed && embed !== '-' ? (await import(embed)).loadStaticModel() : undefined;
for (const q of queries) {
  const kw = rank(q, docs, docs.length).map((h) => h.index);
  let fused = kw;
  if (model) {
    const qv = model.encode(q);
    const sem = docs.map((d, i) => { const v = model.encode(d); let s = 0; for (let k = 0; k < v.length; k++) s += v[k] * qv[k]; return { i, s }; }).sort((a, b) => b.s - a.s).map((x) => x.i);
    const sc = new Map<number, number>();
    kw.forEach((i, r) => sc.set(i, (sc.get(i) ?? 0) + 1 / (60 + r)));
    sem.forEach((i, r) => sc.set(i, (sc.get(i) ?? 0) + 1 / (60 + r)));
    fused = [...sc.entries()].sort((a, b) => b[1] - a[1]).map(([i]) => i);
  }
  const r = (l: number[]) => { const k = l.indexOf(target); return k < 0 ? '-' : String(k + 1); };
  console.log(`${id}\tkw=${r(kw)}\tfused=${r(fused)}\t${q.slice(0, 90)}`);
}
