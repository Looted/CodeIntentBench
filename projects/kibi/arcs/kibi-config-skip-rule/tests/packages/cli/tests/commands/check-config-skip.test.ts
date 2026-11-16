// Benchmark-owned hidden test: repository configuration cannot switch a canonical check rule off.
// A workspace whose .kb/config.json names symbol-coverage in check.skip still gets that rule's
// finding from a plain `kibi check`, and the default rule set is still every canonical and advisory
// rule. The fixture is the one the project's own check test uses for a symbol-coverage failure.
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { RULES, getDefaultRules, getEffectiveRules, isCanonicalRule } from "../../src/utils/rule-registry.js";
import { execSync, spawnSync } from "../helpers/isolated-env.js";

const TEST_TIMEOUT_MS = 120_000;
const kibiBin = path.resolve(__dirname, "../../bin/kibi");

function kibi(args: string[], cwd: string): { status: number | null; output: string } {
  const result = spawnSync("bun", [kibiBin, ...args], { cwd, encoding: "utf8" });
  return { status: result.status, output: `${result.stdout ?? ""}\n${result.stderr ?? ""}` };
}

function write(root: string, relative: string, content: string): void {
  const absolute = path.join(root, relative);
  mkdirSync(path.dirname(absolute), { recursive: true });
  writeFileSync(absolute, content);
}

/** A symbol whose requirement has a scenario but whose only test path is a direct requirement link: a symbol-coverage finding. */
function writeUncoveredSymbol(root: string): void {
  write(
    root,
    ".kb/requirements/REQ-DIRECT-BLOCKED-002.md",
    "---\nid: REQ-DIRECT-BLOCKED-002\ntitle: Direct Blocked Req\nstatus: open\npriority: must\nsource: .kb/requirements/REQ-DIRECT-BLOCKED-002.md\nlinks:\n  - type: specified_by\n    target: SCEN-DIRECT-BLOCKED-002\n  - type: verified_by\n    target: TEST-DIRECT-BLOCKED-002\n---\n\n# Direct Blocked Req\n",
  );
  write(
    root,
    ".kb/scenarios/SCEN-DIRECT-BLOCKED-002.md",
    "---\nid: SCEN-DIRECT-BLOCKED-002\ntitle: Direct Blocked Scenario\nstatus: active\nsource: .kb/scenarios/SCEN-DIRECT-BLOCKED-002.md\n---\n\n# Direct Blocked Scenario\n",
  );
  write(
    root,
    ".kb/tests/TEST-DIRECT-BLOCKED-002.md",
    "---\nid: TEST-DIRECT-BLOCKED-002\ntitle: Direct Blocked Test\nstatus: passing\nsource: .kb/tests/TEST-DIRECT-BLOCKED-002.md\n---\n\n# Direct Blocked Test\n",
  );
  write(
    root,
    ".kb/symbols.yaml",
    "symbols:\n  - id: symbol-direct-blocked-002\n    title: Direct Blocked Symbol\n    status: active\n    links:\n      - type: covered_by\n        target: TEST-DIRECT-BLOCKED-002\n      - type: implements\n        target: REQ-DIRECT-BLOCKED-002\n",
  );
}

describe("a repository cannot switch a canonical check rule off", () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(path.join(os.tmpdir(), "cib-check-skip-"));
    execSync("git init -b main", { cwd: root, stdio: "pipe" });
    execSync(`bun ${kibiBin} init`, { cwd: root, stdio: "pipe" });
    writeUncoveredSymbol(root);
  });

  afterEach(() => {
    kibi(["engine", "stop"], root);
    if (existsSync(root)) rmSync(root, { recursive: true, force: true });
  });

  function check(): { status: number | null; output: string } {
    execSync("git add .kb", { cwd: root, stdio: "pipe" });
    execSync(`bun ${kibiBin} sync`, { cwd: root, stdio: "pipe" });
    return kibi(["check"], root);
  }

  test(
    "kibi check reports the symbol-coverage finding without any configuration",
    () => {
      const { status, output } = check();
      expect(status).toBe(1);
      expect(output).toContain("symbol-coverage");
      expect(output).toContain("symbol-direct-blocked-002");
    },
    TEST_TIMEOUT_MS,
  );

  test(
    "a check.skip list in .kb/config.json that names symbol-coverage does not remove the finding",
    () => {
      write(root, ".kb/config.json", `${JSON.stringify({ check: { skip: ["symbol-coverage"] } }, null, 2)}\n`);
      const { status, output } = check();
      expect(status).toBe(1);
      expect(output).toContain("symbol-coverage");
      expect(output).toContain("symbol-direct-blocked-002");
    },
    TEST_TIMEOUT_MS,
  );

  test(
    "naming every canonical rule in check.skip does not make the check pass",
    () => {
      const canonical = RULES.filter((rule) => rule.enforcementClass === "canonical").map((rule) => rule.name);
      write(root, ".kb/config.json", `${JSON.stringify({ check: { skip: canonical } }, null, 2)}\n`);
      const { status, output } = check();
      expect(status).toBe(1);
      expect(output).toContain("symbol-direct-blocked-002");
    },
    TEST_TIMEOUT_MS,
  );
});

describe("the rule set of a plain check", () => {
  test("default rules are canonical plus advisory", () => {
    const names = (cls: string) => RULES.filter((rule) => rule.enforcementClass === cls).map((rule) => rule.name);
    expect(isCanonicalRule("symbol-coverage")).toBe(true);
    expect([...getDefaultRules()].sort()).toStrictEqual([...names("canonical"), ...names("advisory")].sort());
    expect([...getEffectiveRules()].sort()).toStrictEqual([...getDefaultRules()].sort());
  });
});
