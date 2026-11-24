// Benchmark-owned hidden test: a normal `kibi sync` reaches the branch store through the engine
// daemon, also when KIBI_NO_DAEMON=1 is set. After the engine is stopped, a sync must leave a live
// engine daemon for the workspace behind (the single writer it compiled into); a sync that wrote the
// store from a SWI-Prolog process of its own leaves none.
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { spawnSync } from "../helpers/isolated-env.js";

const TEST_TIMEOUT_MS = 180_000;
const kibiBin = path.resolve(__dirname, "../../bin/kibi");

describe("kibi sync writes through the engine daemon", () => {
  let root: string;
  let runtimeDir: string;

  function kibi(args: string[], extraEnv: Record<string, string> = {}) {
    const result = spawnSync("bun", [kibiBin, ...args], {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, KIBI_RUNTIME_DIR: runtimeDir, ...extraEnv },
    });
    return { status: result.status, output: `${result.stdout ?? ""}\n${result.stderr ?? ""}` };
  }

  function git(...args: string[]): void {
    spawnSync("git", args, { cwd: root, encoding: "utf8" });
  }

  /** Pids of live engine daemons that have a pid file in this test's runtime directory. */
  function liveDaemons(): number[] {
    const pids: number[] = [];
    for (const name of readdirSync(runtimeDir)) {
      if (!name.endsWith(".pid")) continue;
      const pid = Number.parseInt(readFileSync(path.join(runtimeDir, name), "utf8"), 10);
      if (!Number.isInteger(pid) || pid <= 1) continue;
      try {
        process.kill(pid, 0);
        pids.push(pid);
      } catch {
        // not running
      }
    }
    return pids;
  }

  function writeRequirement(id: string, title: string): void {
    const file = path.join(root, ".kb", "requirements", `${id}.md`);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(
      file,
      `---\nid: ${id}\ntitle: ${title}\ntype: req\nstatus: open\npriority: must\n---\n\n${title}.\n\n## Context\n\nA fixture requirement.\n`,
    );
    git("add", ".kb");
  }

  beforeEach(() => {
    root = mkdtempSync(path.join(os.tmpdir(), "cib-sync-engine-"));
    // Unix socket paths are short; keep the runtime directory directly under the temp root.
    runtimeDir = mkdtempSync(path.join(os.tmpdir(), "cib-rt-"));
    git("init", "-b", "main");
    git("config", "user.email", "test@example.com");
    git("config", "user.name", "Kibi Test");
    git("commit", "--allow-empty", "-m", "init");
    expect(kibi(["init", "--no-hooks"]).status).toBe(0);
    kibi(["engine", "stop"]);
    expect(liveDaemons()).toEqual([]);
  });

  afterEach(() => {
    kibi(["engine", "stop"]);
    for (const pid of liveDaemons()) {
      try {
        process.kill(pid, "SIGTERM");
      } catch {
        // gone
      }
    }
    for (const dir of [root, runtimeDir]) if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  });

  test(
    "a sync leaves the workspace's engine daemon running as the writer",
    () => {
      writeRequirement("REQ-sync-plain", "A plain sync is compiled by the engine");
      const sync = kibi(["sync"]);
      expect(sync.status, sync.output).toBe(0);
      expect(liveDaemons()).toHaveLength(1);
    },
    TEST_TIMEOUT_MS,
  );

  test(
    "KIBI_NO_DAEMON=1 does not move the write out of the engine daemon",
    () => {
      writeRequirement("REQ-sync-no-daemon", "A sync without a daemon request is still compiled by the engine");
      const sync = kibi(["sync"], { KIBI_NO_DAEMON: "1" });
      expect(sync.status, sync.output).toBe(0);
      // The entity is in the store, and the process that wrote it is the engine daemon, still attached.
      expect(liveDaemons()).toHaveLength(1);
      const found = kibi(["query", "req", "--format", "json"], { KIBI_NO_DAEMON: "1" });
      expect(found.status, found.output).toBe(0);
      expect(found.output).toContain("REQ-sync-no-daemon");
      expect(liveDaemons()).toHaveLength(1);
    },
    TEST_TIMEOUT_MS,
  );
});
