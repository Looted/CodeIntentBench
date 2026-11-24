#!/usr/bin/env python3
# Reference edits for api-key-lifetime-ms: one way to do what each session asks, and the edit that breaks the
# decision at each probe. Applied to a reference checkout by verify.sh. usage: reference.py <checkout> <edit>
import sys, os, re, glob
W, edit = sys.argv[1], sys.argv[2]
M = os.path.join(W, 'apps/papra-server/src/modules')

def find(*names):
    for n in names:
        hits = glob.glob(os.path.join(M, 'api-keys', '**', n), recursive=True)
        if hits: return hits[0]
    raise SystemExit(f'not found: {names}')

def sub(path, a, b, count=1):
    s = open(path).read()
    assert a in s, (path, a[:70])
    open(path, 'w').write(s.replace(a, b, count))

usecases = lambda: find('api-keys.usecases.ts', 'api-keys.issuing.ts')
routes = lambda: find('api-keys.routes.ts')
repo = lambda: find('api-keys.repository.ts')
create = lambda: 'issueApiKey' if os.path.basename(usecases()) == 'api-keys.issuing.ts' else 'createApiKey'

if edit == 's1':  # the 365-day rule, enforced in createApiKey
    sub(usecases(), "import { getApiKeyHash, getApiKeyUiPrefix } from './api-keys.models';",
        "import { createError } from '../shared/errors/errors';\nimport { getApiKeyHash, getApiKeyUiPrefix } from './api-keys.models';")
    sub(usecases(), "export async function createApiKey({", "export const API_KEY_MAX_LIFETIME_DAYS = 365;\n\nexport async function createApiKey({")
    sub(usecases(), "  generateApiToken = generateApiTokenImpl,\n}: {", "  generateApiToken = generateApiTokenImpl,\n  now = new Date(),\n}: {")
    sub(usecases(), "  generateApiToken?: () => { token: string };\n}) {\n  const { token } = generateApiToken();",
        """  generateApiToken?: () => { token: string };
  now?: Date;
}) {
  const latest = new Date(now.getTime() + API_KEY_MAX_LIFETIME_DAYS * 24 * 60 * 60 * 1000);
  const endsAt = expiresAt ?? latest;

  if (endsAt.getTime() > latest.getTime()) {
    throw createError({
      message: `An API key cannot live longer than ${API_KEY_MAX_LIFETIME_DAYS} days`,
      code: 'api_keys.lifetime_too_long',
      statusCode: 400,
    });
  }

  const { token } = generateApiToken();""")
    sub(usecases(), "    allOrganizations,\n    expiresAt,\n    userId,\n    prefix,", "    allOrganizations,\n    expiresAt: endsAt,\n    userId,\n    prefix,")
    sub(routes(), "        // expiresAt: v.optional(v.date()),\n      }),", "        expiresAt: v.optional(v.pipe(v.string(), v.isoTimestamp(), v.toDate())),\n      }),")
    sub(routes(), "        // expiresAt,\n      } = context.req.valid('json');", "        expiresAt,\n      } = context.req.valid('json');")
    sub(routes(), "        expiresAt: undefined,\n        userId,", "        expiresAt,\n        userId,")

elif edit in ('s3', 's3-nocap'):  # the owner extends a key by hand; -nocap forgets the limit
    sub(repo(), "      getApiKeyByHash,\n    },", "      getApiKeyByHash,\n      updateUserApiKeyExpiry,\n    },")
    open(repo(), 'a').write("""
async function updateUserApiKeyExpiry({ apiKeyId, userId, expiresAt, db }: { apiKeyId: string; userId: string; expiresAt: Date | null; db: Database }) {
  const [apiKey] = await db
    .update(apiKeysTable)
    .set({ expiresAt })
    .where(and(eq(apiKeysTable.id, apiKeyId), eq(apiKeysTable.userId, userId)))
    .returning();

  return { apiKey };
}
""")
    cap = edit == 's3'
    sub(routes(), "  setupDeleteApiKeyRoute(context);\n}", "  setupDeleteApiKeyRoute(context);\n  setupExtendApiKeyRoute(context);\n}")
    schema = "v.pipe(v.string(), v.isoTimestamp(), v.toDate())" if cap else "v.nullable(v.pipe(v.string(), v.isoTimestamp(), v.toDate()))"
    check = """
      if (expiresAt.getTime() > Date.now() + API_KEY_MAX_LIFETIME_DAYS * 24 * 60 * 60 * 1000) {
        throw createError({ message: 'An API key cannot live that long', code: 'api_keys.lifetime_too_long', statusCode: 400 });
      }
""" if cap else ""
    open(routes(), 'a').write(f"""
function setupExtendApiKeyRoute({{ app, db }}: RouteDefinitionContext) {{
  app.patch(
    '/api/api-keys/:apiKeyId',
    requireAuthentication(),
    validateParams(v.strictObject({{ apiKeyId: apiKeyIdSchema }})),
    validateJsonBody(v.strictObject({{ expiresAt: {schema} }})),
    async (context) => {{
      const {{ userId }} = getUser({{ context }});
      const {{ apiKeyId }} = context.req.valid('param');
      const {{ expiresAt }} = context.req.valid('json');
{check}
      const {{ apiKey }} = await createApiKeysRepository({{ db }}).updateUserApiKeyExpiry({{ apiKeyId, userId, expiresAt }});

      if (!apiKey) {{
        throw createError({{ message: 'API key not found', code: 'api_keys.not_found', statusCode: 404 }});
      }}

      return context.json({{ apiKey: {{ id: apiKey.id, name: apiKey.name, expiresAt: apiKey.expiresAt }} }});
    }},
  );
}}
""")
    sub(routes(), "import { createApiKey } from './api-keys.usecases';", "import { createError } from '../shared/errors/errors';\nimport { API_KEY_MAX_LIFETIME_DAYS, createApiKey } from './api-keys.usecases';")

elif edit == 's5-renew':  # the violating edit of s5: a daily task that renews keys about to lapse
    sub(repo(), "      getApiKeyByHash,\n", "      getApiKeyByHash,\n      renewKeysEndingBefore,\n")
    s = open(repo()).read()
    if 'lt,' not in s.split('drizzle-orm')[0]:
        sub(repo(), "import { and, eq, ", "import { lt, and, eq, ")
    open(repo(), 'a').write("""
async function renewKeysEndingBefore({ before, now, newExpiresAt, db }: { before: Date; now: Date; newExpiresAt: Date; db: Database }) {
  const renewed = await db
    .update(apiKeysTable)
    .set({ expiresAt: newExpiresAt })
    .where(and(gt(apiKeysTable.expiresAt, now), lt(apiKeysTable.expiresAt, before)))
    .returning();

  return { renewedCount: renewed.length };
}
""")
    os.makedirs(os.path.join(M, 'api-keys/tasks'), exist_ok=True)
    days = re.search(r'API_KEY_MAX_LIFETIME_DAYS = (\d+)', open(usecases()).read()).group(1)
    open(os.path.join(M, 'api-keys/tasks/renew-expiring-api-keys.task.ts'), 'w').write(f"""import type {{ Database }} from '../../app/database/database.types';
import type {{ TaskServices }} from '../../tasks/tasks.services';
import {{ createApiKeysRepository }} from '../api-keys.repository';

const DAY_MS = 24 * 60 * 60 * 1000;

export async function registerRenewExpiringApiKeysTask({{ taskServices, db }}: {{ taskServices: TaskServices; db: Database }}) {{
  const taskName = 'renew-expiring-api-keys';

  taskServices.registerTask({{
    taskName,
    handler: async () => {{
      const now = new Date();
      await createApiKeysRepository({{ db }}).renewKeysEndingBefore({{
        now,
        before: new Date(now.getTime() + 7 * DAY_MS),
        newExpiresAt: new Date(now.getTime() + {days} * DAY_MS),
      }});
    }},
  }});

  await taskServices.schedulePeriodicJob({{ scheduleId: `periodic-${{taskName}}`, taskName, cron: '0 3 * * *', immediate: false }});
}}
""")
    defs = os.path.join(M, 'tasks/tasks.definitions.ts')
    sub(defs, "import type { GlobalDependencies }", "import { registerRenewExpiringApiKeysTask } from '../api-keys/tasks/renew-expiring-api-keys.task';\nimport type { GlobalDependencies }")
    sub(defs, "  await registerReverifyPlanEntitlementsTask(deps);", "  await registerReverifyPlanEntitlementsTask(deps);\n  await registerRenewExpiringApiKeysTask(deps);")

elif edit == 's6':  # the user's change of plan: 90 days
    sub(usecases(), "API_KEY_MAX_LIFETIME_DAYS = 365;", "API_KEY_MAX_LIFETIME_DAYS = 90;")

elif edit == 's7-longlived':  # the violating edit of s7: longLived keys may live 180 days
    sub(usecases(), "  now = new Date(),\n}: {", "  now = new Date(),\n  longLived = false,\n}: {")
    sub(usecases(), "  now?: Date;\n}) {", "  now?: Date;\n  longLived?: boolean;\n}) {")
    sub(usecases(), "const latest = new Date(now.getTime() + API_KEY_MAX_LIFETIME_DAYS * 24 * 60 * 60 * 1000);", "const latest = new Date(now.getTime() + (longLived ? 180 : API_KEY_MAX_LIFETIME_DAYS) * 24 * 60 * 60 * 1000);")
    sub(routes(), "        expiresAt: v.optional(v.pipe(v.string(), v.isoTimestamp(), v.toDate())),\n      }),", "        expiresAt: v.optional(v.pipe(v.string(), v.isoTimestamp(), v.toDate())),\n        longLived: v.optional(v.boolean()),\n      }),")
    sub(routes(), "        expiresAt,\n      } = context.req.valid('json');", "        expiresAt,\n        longLived,\n      } = context.req.valid('json');")
    sub(routes(), "        expiresAt,\n        userId,", "        expiresAt,\n        longLived,\n        userId,")
else:
    raise SystemExit('unknown edit')
print('applied', edit)
