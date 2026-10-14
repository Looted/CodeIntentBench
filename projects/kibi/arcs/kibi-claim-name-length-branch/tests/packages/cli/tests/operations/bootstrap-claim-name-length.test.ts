// Benchmark-owned hidden test: generated claim-name aspects after the recorded change to three words
// and thirty characters. It checks the bounds, not the exact shortened spellings.
import { describe, expect, test } from "bun:test";
import { buildIntentClaimCandidates } from "../../src/operations/bootstrap/intent-claims.js";
import { normalizeBootstrapContext } from "../../src/operations/bootstrap/presentation.js";
import {
  MAX_ASPECT_CHARS,
  MAX_ASPECT_WORDS,
  SubjectKeyRegistry,
  shortenSubjectAspect,
} from "../../src/operations/bootstrap/requirement-claims.js";
import { isConventionalSubjectKey } from "../../src/utils/strict-modeling.js";

type Claim = Readonly<{ reference: string; statement: string; component?: string }>;

function plan(claims: readonly Claim[], registry = new SubjectKeyRegistry()) {
  return buildIntentClaimCandidates(
    normalizeBootstrapContext({
      knowledgeSources: [
        { id: "spec", title: "Product spec", locator: "docs/spec.md", kind: "specification", authority: "authoritative" },
      ],
      intentClaims: claims.map((claim) => ({ sourceId: "spec", excerpt: claim.statement, ...claim })),
    } as never),
    new Set(),
    0.8,
    registry,
  );
}

function subjectKeys(result: ReturnType<typeof plan>): string[] {
  return result.candidates.map((candidate) => {
    const subject = candidate.applyPlan.find(
      (step) => (step.properties as Record<string, unknown>).fact_kind === "subject",
    );
    return String((subject?.properties as Record<string, unknown>).subject_key);
  });
}

function aspectOf(key: string): string {
  return key.split(".").slice(1).join(".");
}

const INBOX =
  "Support inbox must update in real time when a new ticket is assigned to the agent without a page refresh.";
const TICKET =
  "The ticket must be visible to the selected agent as something they can accept or decline.";

describe("bootstrap subject key aspects stay short noun phrases", () => {
  test("the limits are three words and thirty characters", () => {
    expect(MAX_ASPECT_WORDS).toBe(3);
    expect(MAX_ASPECT_CHARS).toBe(30);
  });

  test("whole-sentence aspects are shortened within the limits", () => {
    for (const aspect of [
      "update_in_real_time_when_a_new_ticket_is_assigned_to_the_agent_without_a_page_refresh",
      "be_visible_to_the_selected_agent_as_something_they_can_accept_or_decline",
      "workflow_states_and_review_content_states",
      "discarding_a_draft_while_finishing_a_review",
      "automatically_displayed_existing_comment_thread",
      "opening_a_missing_or_archived_support_ticket_record",
    ]) {
      const short = shortenSubjectAspect(aspect);
      expect(short.length, aspect).toBeGreaterThan(0);
      expect(short.split("_").length, aspect).toBeLessThanOrEqual(3);
      expect(short.length, aspect).toBeLessThanOrEqual(30);
    }
  });

  test("the plan uses a shortened key and reports the original beside it", () => {
    const result = plan([
      { reference: "INBOX-1", statement: INBOX, component: "support inbox" },
      { reference: "TICKET-1", statement: TICKET, component: "ticket" },
    ]);
    const keys = subjectKeys(result);
    expect(keys).toHaveLength(2);
    expect(new Set(keys).size).toBe(2);
    for (const key of keys) {
      expect(isConventionalSubjectKey(key)).toBe(true);
      expect(aspectOf(key).split(/[._]/).length).toBeLessThanOrEqual(3 + (aspectOf(key).includes(".") ? 1 : 0));
      expect(aspectOf(key).split(".")[0].length).toBeLessThanOrEqual(30);
    }
    const shortened = result.diagnostics.filter((line) => line.startsWith("subject-key-shortened:"));
    expect(shortened).toHaveLength(2);
    expect(shortened[0]).toContain("spec:INBOX-1");
    expect(shortened[0]).toContain(
      "support_inbox.update_in_real_time_when_a_new_ticket_is_assigned_to_the_agent_without_a_page_refresh",
    );
    expect(shortened[0]).toContain(`uses ${keys[0]}`);
  });

  test("planning is deterministic", () => {
    const claims = [
      { reference: "INBOX-1", statement: INBOX, component: "support inbox" },
      { reference: "TICKET-1", statement: TICKET, component: "ticket" },
    ];
    expect(subjectKeys(plan(claims))).toEqual(subjectKeys(plan(claims)));
  });
});
