---
title: At most 25 canned replies can be added or removed in one request in the support portal.
status: active
semantic_text: At most 25 canned replies can be added or removed in one request in the support portal.
semantic_clauses:
  - At most 25 canned replies can be added or removed in one request in the support portal
logic_claims:
  - CLAIM-6F31557BDD192D02
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ddd59425faeeedec17e7a7141de57c8d31a3adec60f02037e0b847b432ea59f4
semantic_inventory:
  - claim_key: CLAIM-6F31557BDD192D02
    claim_text: At most 25 canned replies can be added or removed in one request in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - support.canned_replies
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-153'
  recorded_at: '2026-09-13T14:16:04.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Requests with more than 25 canned replies timed out on slow connections.
id: REQ-support-canned-replies-batch-size
type: req
---
At most 25 canned replies can be added or removed in one request in the support portal.

## Context

Requests with more than 25 canned replies timed out on slow connections.

## Source

> feat(support): batch canned replies, 25 per request (SUP-153)

Source: Support portal decision log - SUP-153
