#!/usr/bin/env bash
# A teammate's refactor between sessions, with no change in behaviour: the SWI-Prolog floor constant
# MINIMUM_SWIPL_MAJOR is renamed to SWIPL_FLOOR and moved from swipl-resolver.ts to a constants
# file, and the two messages that quote the floor are reworded. Source and tests are changed
# together, so the suite stays as green as it was. The value is whatever the constant holds when
# the script runs. Decision records (docs, notes, the knowledge base) are not touched: a record that
# names the old constant or file is now stale, in every arm alike.
set -euo pipefail
ws="$1"
node - "$ws" <<'JS'
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ws = process.argv[2];
const resolver = path.join(ws, 'packages/cli/src/prolog/swipl-resolver.ts');
if (!fs.existsSync(resolver)) { console.error('teammate: swipl-resolver.ts not found; nothing refactored'); process.exit(0); }
let src = fs.readFileSync(resolver, 'utf8');
const decl = /^export const MINIMUM_SWIPL_MAJOR(?::\s*number)?\s*=\s*(\d+);[ \t]*\n/m;
const m = src.match(decl);
if (!m) { console.error('teammate: MINIMUM_SWIPL_MAJOR declaration not found; nothing refactored'); process.exit(0); }
const floor = m[1];

// 1. The constant moves to its own file under a new name; the resolver re-exports it.
src = src.replace(decl, 'export { SWIPL_FLOOR } from "./swipl-constants.js";\n');
const lastImport = [...src.matchAll(/^import [\s\S]*?;\n/gm)].pop();
const at = lastImport ? lastImport.index + lastImport[0].length : 0;
src = `${src.slice(0, at)}import { SWIPL_FLOOR } from "./swipl-constants.js";\n${src.slice(at)}`;
fs.writeFileSync(resolver, src);
fs.writeFileSync(
  path.join(ws, 'packages/cli/src/prolog/swipl-constants.ts'),
  `/**\n * Constants of the SWI-Prolog resolver, kept apart from the resolution logic.\n */\n\n/** Oldest SWI-Prolog major release accepted from KIBI_SWIPL or PATH. */\nexport const SWIPL_FLOOR = ${floor};\n`,
);

// 2. Every use of the old name, and the two reworded messages, in source and tests alike.
const listed = execFileSync('git', ['-C', ws, 'ls-files', '-co', '--exclude-standard', '-z', '--', 'packages', 'scripts'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
let touched = 0;
for (const rel of listed.split('\0')) {
  if (!/\.(ts|tsx|mts|mjs|js)$/.test(rel) || /(^|\/)(dist|node_modules)\//.test(rel)) continue;
  const file = path.join(ws, rel);
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = before
    .replace(/\bMINIMUM_SWIPL_MAJOR\b/g, 'SWIPL_FLOOR')
    .replace(/ or newer is required/g, ' is the oldest supported release')
    .replace(/(is version [^,\n]+), older than /g, '$1, below the supported release ');
  if (after !== before) { fs.writeFileSync(file, after); touched += 1; }
}
console.log(`teammate: SWIPL_FLOOR = ${floor} now lives in packages/cli/src/prolog/swipl-constants.ts; ${touched} files updated`);
JS
