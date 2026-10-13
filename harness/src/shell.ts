import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync, appendFileSync } from 'node:fs';
import { dirname } from 'node:path';

export interface ShResult {
  code: number;
  stdout: string;
  stderr: string;
  duration_ms: number;
  timed_out: boolean;
}

export function sh(command: string, opts: { cwd?: string; env?: NodeJS.ProcessEnv; input?: string; timeoutMs?: number; quiet?: boolean } = {}): ShResult {
  const start = Date.now();
  const r = spawnSync('bash', ['-c', command], {
    cwd: opts.cwd,
    env: opts.env ?? process.env,
    input: opts.input,
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
    timeout: opts.timeoutMs,
  });
  const timed_out = r.error?.name === 'Error' && /ETIMEDOUT/.test(String((r.error as NodeJS.ErrnoException).code));
  const out: ShResult = {
    code: r.status ?? (timed_out ? 124 : 1),
    stdout: r.stdout ?? '',
    stderr: r.stderr ?? '',
    duration_ms: Date.now() - start,
    timed_out,
  };
  if (!opts.quiet && out.code !== 0) {
    process.stderr.write(`[sh] exit ${out.code}: ${command}\n${out.stderr.slice(-2000)}\n`);
  }
  return out;
}

export function must(command: string, opts: Parameters<typeof sh>[1] = {}): string {
  const r = sh(command, opts);
  if (r.code !== 0) throw new Error(`command failed (${r.code}): ${command}\n${r.stderr.slice(-4000)}`);
  return r.stdout;
}

/** Spawn a long-running process, streaming stdout lines to a file and returning the exit code. */
export function stream(
  cmd: string,
  args: string[],
  opts: { cwd: string; env: NodeJS.ProcessEnv; stdoutFile: string; stderrFile: string; timeoutMs: number; input?: string },
): Promise<{ code: number | null; timed_out: boolean; duration_ms: number }> {
  mkdirSync(dirname(opts.stdoutFile), { recursive: true });
  writeFileSync(opts.stdoutFile, '');
  writeFileSync(opts.stderrFile, '');
  const start = Date.now();
  return new Promise((resolvePromise) => {
    const child = spawn(cmd, args, { cwd: opts.cwd, env: opts.env, stdio: ['pipe', 'pipe', 'pipe'] });
    let timed_out = false;
    const timer = setTimeout(() => {
      timed_out = true;
      child.kill('SIGTERM');
      setTimeout(() => child.kill('SIGKILL'), 10_000).unref();
    }, opts.timeoutMs);
    child.stdout.on('data', (d) => appendFileSync(opts.stdoutFile, d));
    child.stderr.on('data', (d) => appendFileSync(opts.stderrFile, d));
    if (opts.input !== undefined) child.stdin.write(opts.input);
    child.stdin.end();
    child.on('close', (code) => {
      clearTimeout(timer);
      resolvePromise({ code, timed_out, duration_ms: Date.now() - start });
    });
  });
}
