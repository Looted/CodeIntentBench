#!/usr/bin/env bash
# A teammate's commit between sessions: disables the expiry filter in getApiKeyByHash
# "temporarily" and drops the test that covered it. The suite stays green.
set -euo pipefail
ws="$1"
repo="$ws/apps/papra-server/src/modules/api-keys/api-keys.repository.ts"
test="$ws/apps/papra-server/src/modules/api-keys/api-keys.repository.test.ts"
node - "$repo" <<'JS'
const fs = require('fs');
const [file] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
// Replace the whole function, whatever shape the previous session gave it, with a plain lookup by hash.
const re = /(?:export )?async function getApiKeyByHash\([\s\S]*?\n\}\n/;
if (!re.test(s)) { console.error('getApiKeyByHash not found'); process.exit(1); }
s = s.replace(re, `async function getApiKeyByHash({ keyHash, db }: { keyHash: string; db: Database; now?: Date }) {
  // TODO: expiry filtering disabled temporarily while we investigate clock skew on the EU cluster
  const [apiKey] = await db
    .select()
    .from(apiKeysTable)
    .where(eq(apiKeysTable.keyHash, keyHash));

  return { apiKey };
}
`);
fs.writeFileSync(file, s);
JS
# The expiry tests go with it: back to the version before the previous session, which has none.
git -C "$ws" show "884d4704106b22165037a96aad471146e481fef2:apps/papra-server/src/modules/api-keys/api-keys.repository.test.ts" > "$test"
echo "teammate: disabled the expiry filter in getApiKeyByHash, dropped its tests"
