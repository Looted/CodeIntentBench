import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { cutHistoryAtBase, ensureCommitInWorkspace, mirrorDir, readAtCommit } from '../src/workspace.ts';

const ID = ['-c', 'user.name=t', '-c', 'user.email=t@example.com'];
const g = (cwd: string, ...a: string[]) => execFileSync('git', [...ID, ...a], { cwd, encoding: 'utf8' }).trim();

test('an unpatched workspace keeps history up to its base and nothing after it', () => {
  const root = mkdtempSync(join(tmpdir(), 'fencebench-cut-'));
  const project = { name: `fencebench-test-cut-${process.pid}` };
  const mirror = mirrorDir(project);
  try {
    const src = join(root, 'src'); mkdirSync(src);
    g(src, 'init', '-q', '-b', 'main');
    const commit = (n: number) => { writeFileSync(join(src, 'f.txt'), `v${n}\n`); g(src, 'add', '-A'); g(src, 'commit', '-q', '-m', `c${n}`); return g(src, 'rev-parse', 'HEAD'); };
    const [c1, c2, c3] = [commit(1), commit(2), commit(3)];
    g(src, 'tag', 'v3');
    rmSync(mirror, { recursive: true, force: true });
    execFileSync('git', ['clone', '-q', '--mirror', src, mirror]);
    const ws = join(root, 'ws');
    execFileSync('git', ['clone', '-q', '--shared', '--no-checkout', mirror, ws]);
    g(ws, 'checkout', '-q', '-B', 'main', c2);
    g(ws, 'remote', 'remove', 'origin');
    cutHistoryAtBase(ws, (cmd) => execFileSync('bash', ['-c', `git ${cmd}`], { cwd: ws, encoding: 'utf8' }));

    assert.equal(g(ws, 'log', '--all', '--format=%s'), 'c2\nc1', 'history up to the base stays');
    assert.equal(g(ws, 'tag'), '', 'no later release tags');
    assert.notEqual(spawnSync('git', ['cat-file', '-e', `${c3}^{commit}`], { cwd: ws }).status, 0, 'a later commit cannot be read by its hash');
    assert.ok(!g(ws, 'fsck', '--unreachable', '--no-reflogs').includes(c3), 'nor found by fsck');
    assert.equal(spawnSync('git', ['cat-file', '-e', `${c1}^{commit}`], { cwd: ws }).status, 0);

    assert.equal(readAtCommit(ws, project, c3, 'f.txt').stdout, 'v3\n', 'a hidden test at a later commit is read from the mirror');
    assert.notEqual(spawnSync('git', ['cat-file', '-e', `${c3}^{commit}`], { cwd: ws }).status, 0, 'without copying it in');
    ensureCommitInWorkspace(ws, project, c3);
    assert.equal(spawnSync('git', ['cat-file', '-e', `${c3}^{commit}`], { cwd: ws }).status, 0, 'a scripted step fetches it on demand');
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(mirror, { recursive: true, force: true });
  }
});
