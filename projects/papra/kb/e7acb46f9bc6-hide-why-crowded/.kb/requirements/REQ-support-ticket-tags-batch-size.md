---
title: At most 50 ticket tags can be added or removed in one request in the support portal.
status: active
semantic_text: At most 50 ticket tags can be added or removed in one request in the support portal.
semantic_clauses:
  - At most 50 ticket tags can be added or removed in one request in the support portal
logic_claims:
  - CLAIM-84DD67D0B390CA27
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 177fed968d96ddf06894ddea91398d34b59105a48cfc35ba26e4f809a41ac2e8
semantic_inventory:
  - claim_key: CLAIM-84DD67D0B390CA27
    claim_text: At most 50 ticket tags can be added or removed in one request in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - support.ticket_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-120'
  recorded_at: '2025-08-28T11:01:41.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Requests with more than 50 ticket tags timed out on slow connections.
id: REQ-support-ticket-tags-batch-size
type: req
---
At most 50 ticket tags can be added or removed in one request in the support portal.

## Context

Requests with more than 50 ticket tags timed out on slow connections.

## Source

> feat(support): batch ticket tags, 50 per request (SUP-120)

Source: Support portal decision log - SUP-120
