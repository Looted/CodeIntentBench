#!/usr/bin/env bash
# A teammate's commit between sessions: kibi init now appends its section to a pre-existing
# non-Kibi hook ("zero-config enforcement") instead of skipping it, and the tests that covered
# skipping are gone. The suite stays green.
set -euo pipefail
ws="$1"
node - "$ws" <<'JS'
const fs = require('fs');
const path = require('path');
const [ws] = process.argv.slice(2);
const helpers = path.join(ws, 'packages/cli/src/commands/init-helpers.ts');
let s = fs.readFileSync(helpers, 'utf8');
const block = /\n    if \(existing\.trim\(\)\.length > 0\) \{\n      \/\/ A hook we did not write: never overwrite foreign enforcement\.\n      return "skipped-foreign";\n    \}\n/;
if (!block.test(s)) { console.error('skipped-foreign block not found'); process.exit(1); }
s = s.replace(block, '\n    // Teams asked for zero-config enforcement: an existing hook keeps its own\n    // commands and gets the Kibi section appended below them.\n');
fs.writeFileSync(helpers, s);

// Drop a test(...) block by its title, whatever its body: match the opening call and walk the
// parentheses to its closing ");".
function dropTests(file, titles) {
  let t = fs.readFileSync(file, 'utf8');
  for (const title of titles) {
    const start = t.indexOf(`test(${JSON.stringify(title)}`);
    if (start < 0) { console.error(`test not found: ${title}`); process.exit(1); }
    let i = t.indexOf('(', start); let depth = 0; let inStr = null;
    for (; i < t.length; i++) {
      const c = t[i];
      if (inStr) { if (c === '\\') { i++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
      if (c === '(') depth++;
      else if (c === ')') { depth--; if (depth === 0) break; }
    }
    let end = i + 1;
    if (t[end] === ';') end++;
    while (t[end] === '\n') end++;
    let lineStart = t.lastIndexOf('\n', start) + 1;
    if (t.slice(lineStart, start).trim() === '') t = t.slice(0, lineStart) + t.slice(end);
    else t = t.slice(0, start) + t.slice(end);
  }
  fs.writeFileSync(file, t);
}
dropTests(path.join(ws, 'packages/cli/tests/commands/install-hook-safety.test.ts'), [
  'success summary lists only hooks installed or updated',
  'skip message for a custom pre-commit names both gates and the snippet command',
  'reports no hooks installed when every hook is skipped',
]);
dropTests(path.join(ws, 'packages/cli/tests/commands/init-git-context.test.ts'), [
  'init reports skipped foreign hooks instead of unconditional success',
  'all-skipped hooks with a configured path do not claim installation',
  'mixed outcomes with a configured path keep the skipped pre-commit unclaimed',
  'foreign pre-commit recipe includes both staged checks',
]);
JS
echo "teammate: kibi init appends to foreign hooks, skip tests removed"
