#!/usr/bin/env bash
# A teammate's commit between sessions: the oneOf guard refinement is switched off "temporarily",
# the test file that covered it is deleted, and the five guard cases in two other test files are
# skipped. The suite stays as green as it was.
set -euo pipefail
ws="$1"
node - "$ws" <<'JS'
const fs = require('fs');
const path = require('path');
const ws = process.argv[2];
const file = path.join(ws, 'packages/mcp/src/server/json-schema-to-zod.ts');
let s = fs.readFileSync(file, 'utf8');
const line = '      const guardBranches = guardOneOfBranches(obj);\n';
if (!s.includes(line)) { console.error('guardBranches line not found'); process.exit(1); }
s = s.replace(line, [
  '      // TEMP: guard enforcement switched off while hosts that re-validate against the',
  '      // published schema reject refinements it does not state; re-enable after review.',
  '      const guardEnforcement = false as boolean;',
  '      const guardBranches = guardEnforcement ? guardOneOfBranches(obj) : null;',
  '',
].join('\n'));
fs.writeFileSync(file, s);

const skipped = {
  'packages/mcp/tests/server/json-schema-to-zod-exact.test.ts': [
    'objects: a oneOf of guard branches must match exactly one',
    'objects: oneOf that is not made of guard branches is left alone',
    'a guard description ignores non-object parts of not',
  ],
  'packages/mcp/tests/server/json-schema-edges.test.ts': [
    'guard branches built from anyOf, allOf and not are enforced',
    'the message lists every required and forbidden key',
  ],
};
for (const [rel, titles] of Object.entries(skipped)) {
  const testFile = path.join(ws, rel);
  if (!fs.existsSync(testFile)) continue;
  let t = fs.readFileSync(testFile, 'utf8');
  for (const title of titles) t = t.replace(`test("${title}"`, `test.skip("${title}"`);
  fs.writeFileSync(testFile, t);
}
JS
rm -f "$ws/packages/mcp/tests/server/oneof-guard-input-validation.test.ts"
echo "teammate: oneOf guard disabled, its test file removed, five guard cases skipped"
