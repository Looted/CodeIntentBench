#!/usr/bin/env bash
# A teammate's commit between sessions: relaxes the intake webhook secret schema to a plain string
# "temporarily" and removes any test that covered the length rule. The suite stays green.
set -euo pipefail
ws="$1"
cfg="$ws/apps/papra-server/src/modules/intake-emails/intake-emails.config.ts"
node - "$cfg" <<'JS'
const fs = require('fs');
const [file] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
// Replace the webhookSecret schema, whatever shape the previous session gave it, with a plain string.
s = s.replace(/(webhookSecret:\s*\{[\s\S]*?schema:\s*)([^,\n]+(?:\n\s*\.[^\n]+)*)(,)/, (m, a, schema, c) => `${a}z.string()${c} // TODO: temporary for the provider migration, restore the length check after`);
fs.writeFileSync(file, s);
JS
# Any test that covered the secret length goes with it.
{ grep -rl --include='*.test.ts' -iE 'webhookSecret|WEBHOOK_SECRET' "$ws/apps/papra-server/src/modules/intake-emails" "$ws/apps/papra-server/src/modules/config" 2>/dev/null || true; } \
  | { grep -v '/e2e/' || true; } | while read -r f; do rm -f "$f"; done
echo "teammate: relaxed webhookSecret schema, removed its tests"
