// Benchmark-owned hidden test: CI reuses a proof only for an identical code snapshot; a matching
// commit SHA with a proven run is not enough. The cases are the project's own (scripts/tests/
// ci-proof-reuse.test.ts at the base commit), kept in a separate file so that the project's test
// file stays the agent's to change.
import { describe, expect, test } from "bun:test";
import { assessProofReuse } from "../ci-proof-reuse.js";

const repository = "Looted/kibi";
const headSha = "a".repeat(40);
const baseSha = "b".repeat(40);
const mergeSha = "c".repeat(40);
const snapshotHash = "d".repeat(64);
const run = {
  id: 123,
  run_attempt: 1,
  head_sha: headSha,
  head_branch: "develop",
  event: "push",
  status: "completed",
  conclusion: "success",
  path: ".github/workflows/proof.yml",
  html_url: `https://github.com/${repository}/actions/runs/123`,
};
const attestation = {
  version: "kibi.ci-proof-attestation.v1",
  outcome: "passed",
  snapshot: { version: "kibi.workspace-snapshot.v2", hash: snapshotHash },
  source: { repository, branch: "develop", sha: headSha, event: "push" },
  run: { id: run.id, attempt: run.run_attempt, workflow: ".github/workflows/proof.yml", url: run.html_url },
  artifact: "kibi-proof-attestation",
};

function candidate(overrides: Record<string, unknown> = {}) {
  return {
    repository,
    headRepository: repository,
    headBranch: "develop",
    headSha,
    baseSha,
    mergeSha,
    checkoutSha: mergeSha,
    mergeParents: [baseSha, headSha],
    developHeadBefore: headSha,
    developHeadAfter: headSha,
    snapshot: { version: "kibi.workspace-snapshot.v2", hash: snapshotHash, dirty: false },
    runs: [run],
    attestation,
    ...overrides,
  } as Parameters<typeof assessProofReuse>[0];
}

describe("a proof is reused for a snapshot, not for a commit SHA", () => {
  test("the same snapshot under different Git SHAs is reused", () => {
    expect(assessProofReuse(candidate()).mode).toBe("reused");
  });

  test("a changed canonical snapshot requires full proof", () => {
    // The head commit has a successful, attested develop proof run; only the merge snapshot differs.
    const decision = assessProofReuse(
      candidate({ snapshot: { version: "kibi.workspace-snapshot.v2", hash: "e".repeat(64), dirty: false } }),
    );
    expect(decision.mode).toBe("execute");
  });

  test("a proven head SHA whose attestation carries another snapshot requires full proof", () => {
    const decision = assessProofReuse(
      candidate({ attestation: { ...attestation, snapshot: { ...attestation.snapshot, hash: "f".repeat(64) } } }),
    );
    expect(decision.mode).toBe("execute");
  });

  test("a dirty merge snapshot or another snapshot version requires full proof", () => {
    for (const overrides of [
      { snapshot: { version: "kibi.workspace-snapshot.v1", hash: snapshotHash, dirty: false } },
      { snapshot: { version: "kibi.workspace-snapshot.v2", hash: snapshotHash, dirty: true } },
      { attestation: { ...attestation, snapshot: { version: "kibi.workspace-snapshot.v1", hash: snapshotHash } } },
    ]) {
      expect(assessProofReuse(candidate(overrides)).mode).toBe("execute");
    }
  });
});
