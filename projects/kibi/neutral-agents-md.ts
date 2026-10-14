// Usage: node neutral-agents-md.ts <workspace>
// Rewrites the repository's AGENTS.md for arms without Kibi: the sections that tell
// agents to use Kibi's tools and knowledge base are removed; the rest (product
// mission, release and documentation policy, repo conventions) stays, so every arm
// gets the same repository policy and only the knowledge container differs.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ws = process.argv[2];
if (!ws) throw new Error('usage: neutral-agents-md.ts <workspace>');
const path = join(ws, 'AGENTS.md');
if (!existsSync(path)) process.exit(0);
const text = readFileSync(path, 'utf8');
const DROP = /^## (Source of Truth|Using Kibi|Modeling Rules|Symbol Traceability)\b/;
const sections = text.split(/\n(?=## )/);
const kept = sections.filter((s) => !DROP.test(s)).map((s) => s
  // Lines in the kept sections that point at Kibi's tools or files.
  .split('\n').filter((l) => !/kb_[a-z_]+|\bkibi\b.*(sync|check|status|skills|prove|migrate)|\.kb\/|Kibi skills|kibi-usage|refreshing Kibi|proof:(prepush|replay)|proof baseline|\/kibi-bootstrap/i.test(l) || /^#/.test(l)).join('\n'));
let out = kept.join('\n');
out = out.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
writeFileSync(path, out);
console.log(`AGENTS.md: kept ${kept.length} of ${sections.length} sections`);
