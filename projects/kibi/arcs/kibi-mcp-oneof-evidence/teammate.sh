#!/usr/bin/env bash
# A teammate's commit between sessions: the oneOf guard refinement is switched off "temporarily"
# and the test file that covered it is deleted. The suite stays green.
set -euo pipefail
ws="$1"
file="$ws/packages/mcp/src/server/json-schema-to-zod.ts"
node - "$file" <<'JS'
const fs = require('fs');
const [file] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
const line = '      const guardBranches = guardOneOfBranches(obj);\n';
if (!s.includes(line)) { console.error('guardBranches line not found'); process.exit(1); }
s = s.replace(line, [
  '      // TEMP: guard enforcement switched off while hosts that re-validate against the',
  '      // published schema reject refinements it does not state; re-enable after review.',
  '      const guardBranches: ReturnType<typeof guardOneOfBranches> = [];',
  '',
].join('\n'));
fs.writeFileSync(file, s);
JS
rm -f "$ws/packages/mcp/tests/server/oneof-guard-input-validation.test.ts"
echo "teammate: oneOf guard disabled, its test file removed"
