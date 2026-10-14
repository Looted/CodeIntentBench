// Benchmark-owned hidden test: the SWI-Prolog floor for a system swipl after the recorded change to 10.0.
import { afterEach, describe, expect, test } from "bun:test";
import { chmodSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  type SwiplResolverDeps,
  resetSwiplResolverCache,
  resolveSwiplWith,
} from "../../src/prolog/swipl-resolver.js";

const tempRoots: string[] = [];

function tempDir(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "kibi-swipl-minimum-"));
  tempRoots.push(dir);
  return dir;
}

afterEach(() => {
  resetSwiplResolverCache();
  for (const dir of tempRoots.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function banner(version: string): string {
  return `SWI-Prolog version ${version} for x86_64-linux\n`;
}

function writeSwipl(file: string, version: string): string {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, `#!/bin/sh\nprintf '%s' '${banner(version)}'\n`);
  chmodSync(file, 0o755);
  return file;
}

function deps(versions: Record<string, string>): SwiplResolverDeps {
  return {
    platform: "linux",
    arch: "x64",
    glibc: true,
    locatePackage: () => undefined,
    runVersion: (bin) => {
      const version = versions[bin];
      if (version === undefined) throw new Error(`no fake version for ${bin}`);
      return banner(version);
    },
  };
}

describe("system swipl floor", () => {
  test("KIBI_SWIPL pointing at SWI-Prolog 9.0.4 is rejected", () => {
    const old = writeSwipl(path.join(tempDir(), "old", "swipl"), "9.0.4");
    expect(() => resolveSwiplWith({ KIBI_SWIPL: old }, deps({ [old]: "9.0.4" }))).toThrow(/9\.0\.4/);
  });

  test("swipl 9.0.4 on PATH is rejected as too old", () => {
    const old = writeSwipl(path.join(tempDir(), "a", "swipl"), "9.0.4");
    let failure: unknown;
    try {
      resolveSwiplWith({ PATH: path.dirname(old) }, deps({ [old]: "9.0.4" }));
    } catch (error) {
      failure = error;
    }
    expect(failure).toBeInstanceOf(Error);
    expect((failure as { code?: string }).code).toBe("swipl_not_found");
    expect((failure as Error).message).toContain("9.0.4");
  });

  test("swipl 10.0.2 on PATH is accepted", () => {
    const current = writeSwipl(path.join(tempDir(), "b", "swipl"), "10.0.2");
    const resolved = resolveSwiplWith({ PATH: path.dirname(current) }, deps({ [current]: "10.0.2" }));
    expect(resolved).toEqual({ bin: current, version: "10.0.2", source: "path" });
  });
});
