// Benchmark-owned hidden test: where lefthook or husky manages the Git hooks, `kibi init` installs
// nothing and writes into none of the manager's files. The assertions are on the files only, not on
// the text init prints, so a change to the wording of the report does not fail them. The workspaces
// follow the project's own hook-managers test at the base commit.
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import { initCommand } from "../../src/commands/init.js";
import {
  captureIo,
  createGitWorkspace,
  git,
  isolateKibiEnv,
  removeTempDir,
  withCwd,
  writeHook,
} from "../helpers/in-process-workspace.js";

const LEFTHOOK_RUNNER =
  '#!/bin/sh\n# lefthook generated hook runner\ncall_lefthook run "$(basename "$0")" "$@"\n';
const LEFTHOOK_CONFIG = "pre-commit:\n  commands:\n    lint:\n      run: npm run lint\n";
const HUSKY_PRE_COMMIT = "npm test\n";
const HUSKY_POST_CHECKOUT = "npm run codegen\n";

describe("kibi init leaves a hook manager's files alone", () => {
  let restores: Array<() => void>;
  let roots: string[];

  beforeEach(() => {
    restores = [];
    roots = [];
    restores.push(isolateKibiEnv());
  });

  afterEach(() => {
    for (const restore of restores.reverse()) restore();
    for (const root of roots) removeTempDir(root);
  });

  function workspace(): string {
    const cwd = createGitWorkspace();
    roots.push(cwd);
    return cwd;
  }

  async function init(cwd: string) {
    const io = captureIo();
    restores.push(io.restore);
    return withCwd(cwd, () => initCommand({ hooks: true }));
  }

  test("under lefthook the runner and lefthook.yml keep their bytes and no hook is added", async () => {
    const cwd = workspace();
    writeFileSync(path.join(cwd, "lefthook.yml"), LEFTHOOK_CONFIG);
    writeHook(cwd, "pre-commit", LEFTHOOK_RUNNER);

    const result = await init(cwd);
    expect(result.exitCode).toBe(0);
    const hooks = path.join(cwd, ".git", "hooks");
    expect(readFileSync(path.join(hooks, "pre-commit"), "utf8")).toBe(LEFTHOOK_RUNNER);
    expect(readdirSync(hooks)).toEqual(["pre-commit"]);
    expect(readFileSync(path.join(cwd, "lefthook.yml"), "utf8")).toBe(LEFTHOOK_CONFIG);
  });

  test("under husky the existing .husky scripts keep their bytes and none is created", async () => {
    const cwd = workspace();
    mkdirSync(path.join(cwd, ".husky", "_"), { recursive: true });
    git(cwd, "config core.hooksPath .husky/_");
    writeFileSync(path.join(cwd, ".husky", "pre-commit"), HUSKY_PRE_COMMIT);
    writeFileSync(path.join(cwd, ".husky", "post-checkout"), HUSKY_POST_CHECKOUT);

    const result = await init(cwd);
    expect(result.exitCode).toBe(0);
    expect(readFileSync(path.join(cwd, ".husky", "pre-commit"), "utf8")).toBe(HUSKY_PRE_COMMIT);
    expect(readFileSync(path.join(cwd, ".husky", "post-checkout"), "utf8")).toBe(HUSKY_POST_CHECKOUT);
    expect(readdirSync(path.join(cwd, ".husky")).sort()).toEqual(["_", "post-checkout", "pre-commit"]);
    expect(readdirSync(path.join(cwd, ".husky", "_"))).toEqual([]);
    expect(existsSync(path.join(cwd, ".git", "hooks", "pre-commit"))).toBe(false);
  });
});
