---
title: Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-4EB4C675253C4301
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5c9f28599cb9febbecc8bf7267743669207588a44619722988326d3800e73569
semantic_inventory:
  - claim_key: CLAIM-4EB4C675253C4301
    claim_text: Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - support.canned_replies
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 111
      end: 157
    subjects:
      - support.canned_replies
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-117'
  recorded_at: '2025-04-25T16:12:26.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Pasted names carried trailing spaces and produced canned replies that looked identical but were not.
id: REQ-support-canned-replies-names-trimmed
type: req
---
Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced canned replies that looked identical but were not.

## Source

> fix(support): trim canned reply names (SUP-117)

Source: Support portal decision log - SUP-117
