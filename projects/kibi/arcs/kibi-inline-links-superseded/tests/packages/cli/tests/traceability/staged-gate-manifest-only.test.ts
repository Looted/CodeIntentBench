// Benchmark-owned hidden test: the staged traceability gate takes a changed symbol's requirement
// links from the symbol manifest only. A leading `implements` comment neither supplies a missing
// link nor replaces a manifest link. The first two cases are the project's own (packages/cli/tests/
// traceability/traceability.test.ts at the base commit); the third runs `kibi check --staged` on a
// staged file whose only link is a comment.
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { type ManifestLookup, extractSymbolsFromStagedFile } from "../../src/traceability/symbol-extract.js";
import { spawnSync } from "../helpers/isolated-env.js";

const TEST_TIMEOUT_MS = 180_000;
const kibiBin = path.resolve(__dirname, "../../bin/kibi");
// Built from parts so this file carries no such comment itself.
const COMMENT = ["//", "implements", "REQ-greet"].join(" ");

describe("staged symbols take requirement links from the manifest only", () => {
  test("an implements comment adds no requirement link", () => {
    const staged: Parameters<typeof extractSymbolsFromStagedFile>[0] = {
      path: "d.ts",
      content: `${["//", "implements", "REQ-1, REQ-2"].join(" ")}\nexport function z() {}`,
      hunkRanges: [{ start: 1, end: 10 }],
      status: "M",
    };
    const symbols = extractSymbolsFromStagedFile(staged);
    expect(symbols[0]?.reqLinks).toEqual([]);
  });

  test("manifest links stand when the code carries an implements comment", () => {
    const manifestLookup: ManifestLookup = new Map([
      ["file.ts:foo", { id: "SYM-001", relationships: [{ type: "implements", to: "REQ-MANIFEST" }] }],
    ]);
    const staged: Parameters<typeof extractSymbolsFromStagedFile>[0] = {
      path: "file.ts",
      content: `${["//", "implements:", "REQ-INLINE"].join(" ")}\nexport function foo() {}`,
      hunkRanges: [{ start: 1, end: 2 }],
      status: "M",
    };
    const symbols = extractSymbolsFromStagedFile(staged, manifestLookup);
    expect(symbols[0]?.id).toBe("SYM-001");
    expect(symbols[0]?.reqLinks).toEqual(["REQ-MANIFEST"]);
  });
});

describe("kibi check --staged", () => {
  let root: string;
  let runtimeDir: string;

  function kibi(args: string[]) {
    const result = spawnSync("bun", [kibiBin, ...args], {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, KIBI_RUNTIME_DIR: runtimeDir },
    });
    return { status: result.status, output: `${result.stdout ?? ""}\n${result.stderr ?? ""}` };
  }

  function git(...args: string[]): void {
    spawnSync("git", args, { cwd: root, encoding: "utf8" });
  }

  function write(relative: string, content: string): void {
    const absolute = path.join(root, relative);
    mkdirSync(path.dirname(absolute), { recursive: true });
    writeFileSync(absolute, content);
  }

  beforeEach(() => {
    root = mkdtempSync(path.join(os.tmpdir(), "cib-staged-links-"));
    runtimeDir = mkdtempSync(path.join(os.tmpdir(), "cib-rt-"));
    git("init", "-b", "main");
    git("config", "user.email", "test@example.com");
    git("config", "user.name", "Kibi Test");
    git("commit", "--allow-empty", "-m", "init");
    expect(kibi(["init", "--no-hooks"]).status).toBe(0);
    write(
      ".kb/requirements/REQ-greet.md",
      "---\nid: REQ-greet\ntitle: The greeting says hi\ntype: req\nstatus: open\npriority: must\ncreated_at: 2026-10-01T00:00:00.000Z\nupdated_at: 2026-10-01T00:00:00.000Z\n---\n\nThe greeting must say hi.\n\n## Context\n\nUsers are greeted.\n",
    );
    git("add", "--all");
    const sync = kibi(["sync"]);
    expect(sync.status, sync.output).toBe(0);
    git("add", "--all");
    git("commit", "--no-verify", "-m", "knowledge base");
  });

  afterEach(() => {
    kibi(["engine", "stop"]);
    for (const dir of [root, runtimeDir]) if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  });

  test(
    "a new symbol whose only link is an implements comment still has no requirement link",
    () => {
      write("src/greet.ts", `${COMMENT}\nexport function greet(): string {\n  return "hi";\n}\n`);
      git("add", "src/greet.ts");
      const { status, output } = kibi(["check", "--staged"]);
      expect(status, output).not.toBe(0);
      // The traceability gate counts the symbol's links: none, although the comment names a current requirement.
      expect(output).toMatch(/greet\s+\(0 of 1 link/);
    },
    TEST_TIMEOUT_MS,
  );
});
