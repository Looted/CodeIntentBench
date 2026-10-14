// Benchmark-owned hidden test: the "Why this changed" floor after the recorded change to six words.
import { describe, expect, test } from "bun:test";
import { MIN_WHY_CHANGED_WORDS } from "../../src/decision-firmness.js";
import {
  SUPERSEDES_REASON_MISSING_RULE,
  evaluateDecisionFirmness,
} from "../../src/public/operations/decision-firmness.js";
import { readAuthoredEntity } from "../../src/public/operations/entity-context.js";

function decision(id: string, body: string): NonNullable<ReturnType<typeof readAuthoredEntity>> {
  const parsed = readAuthoredEntity(
    `---\nid: ${id}\ntitle: ${id} title\ntype: req\n---\n\n${body}`,
    `.kb/requirements/${id}.md`,
  );
  if (parsed === null) throw new Error("fixture did not parse");
  return parsed;
}

function supersede(from: string, to: string): Map<string, Set<string>> {
  return new Map([[from, new Set([to])]]);
}

function missingReasons(whyBody: string): string[] {
  const entities = [decision("REQ-old", "Old statement.\n"), decision("REQ-new", `New statement.\n\n${whyBody}`)];
  return evaluateDecisionFirmness(entities, supersede("REQ-new", "REQ-old"), undefined, new Set())
    .filter((finding) => finding.rule === SUPERSEDES_REASON_MISSING_RULE)
    .map((finding) => finding.entityId);
}

describe("why this changed minimum", () => {
  test("the floor is six words", () => {
    expect(MIN_WHY_CHANGED_WORDS).toBe(6);
  });

  test("a six-word reason satisfies a supersede", () => {
    expect(missingReasons("## Why this changed\n\nLoad test TEST-export-load missed its window.\n")).toEqual([]);
  });

  test("a five-word reason is still missing", () => {
    expect(missingReasons("## Why this changed\n\nLoad test TEST-export-load missed window.\n")).toEqual(["REQ-new"]);
    expect(missingReasons("## Why this changed\n\nSee ticket.\n")).toEqual(["REQ-new"]);
  });
});
