// Usage (as a project's `tests.files` / `tests.all` command): node bun-test-json.ts [--reporter=json] --outputFile=<report.json> [test files...]
// Runs `bun test` on the given files with Bun's JUnit reporter and writes the
// report in the Vitest JSON shape the grader reads (numTotalTests, testResults[].assertionResults[]),
// so a Bun project plugs into the same grading as a Vitest project.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
let outputFile = '';
const files: string[] = [];
for (const a of args) {
  if (a.startsWith('--outputFile=')) outputFile = a.slice('--outputFile='.length);
  else if (a === '--reporter=json' || a === '--') continue;
  // Bun treats a bare argument as a name filter; a path must start with ./ or be absolute.
  else files.push(a.startsWith('/') || a.startsWith('./') ? a : `./${a}`);
}
if (!outputFile) throw new Error('bun-test-json.ts: --outputFile=<path> is required');

const tmp = mkdtempSync(join(tmpdir(), 'cib-bun-'));
const junit = join(tmp, 'junit.xml');
const env: NodeJS.ProcessEnv = { ...process.env, NODE_ENV: process.env.NODE_ENV ?? 'test', KIBI_ENGINE_IDLE_TIMEOUT_MS: process.env.KIBI_ENGINE_IDLE_TIMEOUT_MS ?? '30000', KIBI_RUNTIME_DIR: process.env.KIBI_RUNTIME_DIR ?? join(tmp, 'runtime') };
delete env.KIBI_BRANCH;
const r = spawnSync('bun', ['test', '--reporter=junit', `--reporter-outfile=${junit}`, ...files], { encoding: 'utf8', env, maxBuffer: 256 * 1024 * 1024 });
// Engines the tests started under KIBI_RUNTIME_DIR (one .pid file each) are stopped, as the project's own runner does.
try {
  for (const f of existsSync(env.KIBI_RUNTIME_DIR!) ? readdirSync(env.KIBI_RUNTIME_DIR!) : []) {
    if (!f.endsWith('.pid')) continue;
    const pid = Number.parseInt(readFileSync(join(env.KIBI_RUNTIME_DIR!, f), 'utf8'), 10);
    if (Number.isInteger(pid) && pid > 1) { try { process.kill(pid, 'SIGTERM'); } catch { /* gone */ } }
  }
} catch { /* best effort */ }

interface Case { file: string; fullName: string; title: string; status: 'passed' | 'failed' | 'skipped'; message?: string }
const cases: Case[] = [];
const unescape = (s: string) => s.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const attr = (tag: string, name: string) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? unescape(m[1]) : ''; };
if (existsSync(junit)) {
  const xml = readFileSync(junit, 'utf8');
  // Bun nests <testsuite> per describe block; every <testcase> carries its own file attribute, so cases are read globally.
  const caseRe = /<testcase\b([^>]*?)(\/>|>([\s\S]*?)<\/testcase>)/g;
  let c: RegExpExecArray | null;
  while ((c = caseRe.exec(xml))) {
    const title = attr(c[1], 'name');
    const cls = attr(c[1], 'classname');
    const file = attr(c[1], 'file');
    const inner = c[3] ?? '';
    const failed = /<(failure|error)\b/.test(inner);
    const skipped = /<skipped\b/.test(inner);
    const msg = failed ? (inner.match(/<(?:failure|error)\b[^>]*message="([^"]*)"/)?.[1] ?? '') : undefined;
    const fullName = cls && cls !== title && cls !== file ? `${cls} ${title}`.trim() : title;
    cases.push({ file, fullName, title, status: failed ? 'failed' : skipped ? 'skipped' : 'passed', message: msg ? unescape(msg).slice(0, 500) : undefined });
  }
}
const byFile = new Map<string, Case[]>();
for (const c of cases) { if (!byFile.has(c.file)) byFile.set(c.file, []); byFile.get(c.file)!.push(c); }
// A requested file that produced no test cases (compile error, crash) is a failed file with no assertions.
for (const f of files) { if (![...byFile.keys()].some((k) => k.endsWith(f) || f.endsWith(k))) byFile.set(f, []); }
const testResults = [...byFile.entries()].map(([name, cs]) => ({
  name,
  status: cs.length === 0 ? 'failed' : cs.some((c) => c.status === 'failed') ? 'failed' : 'passed',
  message: cs.length === 0 ? (r.stderr || r.stdout).slice(-1500) : undefined,
  assertionResults: cs.map((c) => ({ fullName: c.fullName, title: c.title, status: c.status, failureMessages: c.message ? [c.message] : [] })),
}));
const counted = cases.filter((c) => c.status !== 'skipped');
const report = {
  numTotalTests: counted.length,
  numPassedTests: counted.filter((c) => c.status === 'passed').length,
  numFailedTests: counted.filter((c) => c.status === 'failed').length,
  success: r.status === 0 && counted.every((c) => c.status === 'passed') && testResults.every((t) => t.status === 'passed'),
  testResults,
  bun: { exit: r.status, stderr_tail: r.stderr.slice(-3000) },
};
writeFileSync(outputFile, JSON.stringify(report, null, 2));
rmSync(tmp, { recursive: true, force: true });
process.stdout.write(`${report.numPassedTests} passed, ${report.numFailedTests} failed in ${testResults.length} files (bun exit ${r.status})\n`);
process.exit(report.success ? 0 : 1);
