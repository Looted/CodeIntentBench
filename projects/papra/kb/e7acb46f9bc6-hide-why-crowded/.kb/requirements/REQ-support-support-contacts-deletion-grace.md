---
title: A deleted support contact in the support portal can be restored for 14 days; after that it is removed for good.
status: active
semantic_text: A deleted support contact in the support portal can be restored for 14 days; after that it is removed for good.
semantic_clauses:
  - A deleted support contact in the support portal can be restored for 14 days
  - after that it is removed for good
logic_claims:
  - CLAIM-833D7C80F65721CB
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7ee99632531d8e60fae0c933b6f4050e8fa801ca62d2000a3023ea93c692f177
semantic_inventory:
  - claim_key: CLAIM-833D7C80F65721CB
    claim_text: A deleted support contact in the support portal can be restored for 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - support.support_contacts
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 110
    subjects:
      - support.support_contacts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-309'
  recorded_at: '2026-07-14T17:41:05.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-support-support-contacts-deletion-grace
type: req
---
A deleted support contact in the support portal can be restored for 14 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(support): 14-day restore window for support contacts (SUP-309)

Source: Support portal decision log - SUP-309
