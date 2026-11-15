#!/usr/bin/env bash
# A teammate's commit between sessions: the API-key lookup caches successful results in memory for
# ten minutes, keyed by the key hash, whatever the previous session did with the same request. A cached
# key is returned without looking at its expiry date again, so a key keeps authenticating for up to ten
# minutes after it expired. The cache is per database handle, so the project's own tests stay green:
# none of them authenticates with a key before and after its expiry time.
set -euo pipefail
ws="$1"
node - "$ws/apps/papra-server/src/modules/api-keys/api-keys.repository.ts" <<'JS'
const fs = require('fs');
const [file] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
// Replace the whole lookup, whatever shape the previous session gave it.
const re = /(?:(?:export )?const API_KEY_CACHE_TTL_MS[\s\S]*?)?(?:export )?async function findActiveApiKey\([\s\S]*?\n\}\n/;
if (!re.test(s)) { console.error('findActiveApiKey not found'); process.exit(1); }
s = s.replace(re, `const API_KEY_LOOKUP_CACHE_TTL_MS = 10 * 60 * 1000;
const apiKeyLookupCaches = new WeakMap<Database, Map<string, { apiKey: typeof apiKeysTable.$inferSelect; cachedAt: number }>>();

function getApiKeyLookupCache({ db }: { db: Database }) {
  const existingCache = apiKeyLookupCaches.get(db);

  if (existingCache) {
    return existingCache;
  }

  const cache = new Map<string, { apiKey: typeof apiKeysTable.$inferSelect; cachedAt: number }>();
  apiKeyLookupCaches.set(db, cache);

  return cache;
}

async function findActiveApiKey({ keyHash, db, now = new Date() }: { keyHash: string; db: Database; now?: Date }) {
  const cache = getApiKeyLookupCache({ db });
  const cached = cache.get(keyHash);

  // Saves a database read on every authenticated request
  if (cached && now.getTime() - cached.cachedAt < API_KEY_LOOKUP_CACHE_TTL_MS) {
    return { apiKey: cached.apiKey };
  }

  const [apiKey] = await db
    .select()
    .from(apiKeysTable)
    .where(eq(apiKeysTable.keyHash, keyHash));

  if (!apiKey || isApiKeyExpired({ expiresAt: apiKey.expiresAt, now })) {
    cache.delete(keyHash);

    return { apiKey: undefined };
  }

  cache.set(keyHash, { apiKey, cachedAt: now.getTime() });

  return { apiKey };
}
`);
if (!/\bisApiKeyExpired\s*[,}]/.test(s.split(/^export /m)[0])) {
  s = s.replace(/^export /m, `import { isApiKeyExpired } from './api-keys.models';\n\nexport `);
}
if (!/import \{[^}]*\beq\b[^}]*\} from 'drizzle-orm';/.test(s)) { console.error('eq is not imported from drizzle-orm'); process.exit(1); }
fs.writeFileSync(file, s);
JS
grep -q 'export function isApiKeyExpired' "$ws/apps/papra-server/src/modules/api-keys/api-keys.models.ts" || { echo "isApiKeyExpired not found in api-keys.models.ts" >&2; exit 1; }
echo "teammate: findActiveApiKey caches successful lookups for ten minutes"
