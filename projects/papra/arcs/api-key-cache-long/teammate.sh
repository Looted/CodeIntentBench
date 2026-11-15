#!/usr/bin/env bash
# A teammate's commit between sessions: the lookup behind API-key authentication is renamed from
# getApiKeyByHash to findActiveApiKey, and the date comparison moves out of the query into a helper,
# isApiKeyExpired, in api-keys.models.ts. Behaviour is unchanged and the suite stays green; every
# caller and test under apps/papra-server/src is renamed with it. Notes outside src are not touched.
set -euo pipefail
ws="$1"
src="$ws/apps/papra-server/src"
node - "$src/modules/api-keys/api-keys.repository.ts" "$src/modules/api-keys/api-keys.models.ts" <<'JS'
const fs = require('fs');
const [repoFile, modelsFile] = process.argv.slice(2);
let s = fs.readFileSync(repoFile, 'utf8');
// Replace the whole function, whatever shape the earlier session gave it.
const re = /(?:export )?async function getApiKeyByHash\([\s\S]*?\n\}\n/;
if (!re.test(s)) { console.error('getApiKeyByHash not found'); process.exit(1); }
s = s.replace(re, `async function findActiveApiKey({ keyHash, db, now = new Date() }: { keyHash: string; db: Database; now?: Date }) {
  const [apiKey] = await db
    .select()
    .from(apiKeysTable)
    .where(eq(apiKeysTable.keyHash, keyHash));

  if (!apiKey || isApiKeyExpired({ expiresAt: apiKey.expiresAt, now })) {
    return { apiKey: undefined };
  }

  return { apiKey };
}
`);
// The helper's import, before the first top-level export.
if (!/isApiKeyExpired\s*[,}]/.test(s.split(/^export /m)[0])) {
  s = s.replace(/^export /m, `import { isApiKeyExpired } from './api-keys.models';\n\nexport `).replace(/\n\n\nimport \{ isApiKeyExpired \}/, `\nimport { isApiKeyExpired }`).replace(/;\n\nimport \{ isApiKeyExpired \}/, `;\nimport { isApiKeyExpired }`);
}
// Query operators that only the old comparison used leave the drizzle import.
s = s.replace(/import \{([^}]*)\} from 'drizzle-orm';/, (whole, names) => {
  const rest = s.replace(whole, '');
  const kept = names.split(',').map((n) => n.trim()).filter(Boolean).filter((n) => new RegExp(`\\b${n}\\b`).test(rest));
  return `import { ${kept.join(', ')} } from 'drizzle-orm';`;
});
fs.writeFileSync(repoFile, s);

let m = fs.readFileSync(modelsFile, 'utf8');
if (!/export function isApiKeyExpired\b/.test(m)) {
  m = `${m.replace(/\s*$/, '\n')}
// An API key is usable until its expiry date; a key without one never expires.
export function isApiKeyExpired({ expiresAt, now = new Date() }: { expiresAt?: Date | null; now?: Date }) {
  return expiresAt !== null && expiresAt !== undefined && expiresAt <= now;
}
`;
  fs.writeFileSync(modelsFile, m);
}
JS
# Callers and tests follow the rename.
grep -rl 'getApiKeyByHash' "$src" | while IFS= read -r f; do
  sed -i 's/\bgetApiKeyByHash\b/findActiveApiKey/g' "$f"
done
echo "teammate: getApiKeyByHash is now findActiveApiKey, the expiry comparison is isApiKeyExpired in api-keys.models.ts"
