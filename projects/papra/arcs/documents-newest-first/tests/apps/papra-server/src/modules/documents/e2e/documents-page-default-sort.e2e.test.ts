// Benchmark-owned test (not from the Papra repository). The documents page of the web client sorts by
// document date, newest first, unless the user picks another order (#1192). The client has no test
// runner in the benchmark, so this test reads its source from the server package. It resolves the
// value the page falls back to (a literal, or a constant declared anywhere in the client), so renaming
// or moving the constant does not change the result; only the value does.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

const clientSrc = join(__dirname, '../../../../../papra-client/src');
const page = readFileSync(join(clientSrc, 'modules/documents/pages/documents.page.tsx'), 'utf8');

function clientFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      return clientFiles(path);
    }
    return /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : [];
  });
}

const sources = clientFiles(clientSrc).map((path) => readFileSync(path, 'utf8'));

function resolveValue(expression: string, seen = new Set<string>()): string | undefined {
  const literal = expression.match(/^['"`](\w+)['"`]/);
  if (literal) {
    return literal[1];
  }
  const identifier = expression.match(/^([A-Za-z_$][\w$]*)$/)?.[1];
  if (!identifier || seen.has(identifier)) {
    return undefined;
  }
  seen.add(identifier);
  const declaration = new RegExp(`(?:const|let)\\s+${identifier}\\b[^=]*=\\s*([^;\\n]+)`);
  for (const source of [page, ...sources]) {
    const match = source.match(declaration);
    if (match) {
      return resolveValue(match[1]!.trim().replace(/\s+as\s+const$/, ''), seen);
    }
  }
  return undefined;
}

function pageDefault(paramKey: string): string | undefined {
  const start = page.indexOf(`paramKey: '${paramKey}'`);
  expect(start, `the documents page keeps the ${paramKey} URL parameter`).toBeGreaterThan(-1);
  const rest = page.slice(start);
  const next = rest.indexOf('paramKey:', 1);
  const block = next === -1 ? rest : rest.slice(0, next);
  const expression = block.match(/defaultValue:\s*([^,\n]+)/)?.[1]?.trim();
  return expression ? resolveValue(expression) : undefined;
}

describe('documents page default sort', () => {
  test('when the URL names no sort, the documents page sorts by document date', () => {
    expect(pageDefault('sortField')).toBe('documentDate');
  });

  test('when the URL names no order, the documents page puts the newest first', () => {
    expect(pageDefault('sortOrder')).toBe('desc');
  });
});
