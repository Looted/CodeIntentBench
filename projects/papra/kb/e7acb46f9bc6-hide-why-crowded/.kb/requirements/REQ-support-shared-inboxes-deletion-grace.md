---
title: A deleted shared inbox in the support portal can be restored for 7 days; after that it is removed for good.
status: active
semantic_text: A deleted shared inbox in the support portal can be restored for 7 days; after that it is removed for good.
semantic_clauses:
  - A deleted shared inbox in the support portal can be restored for 7 days
  - after that it is removed for good
logic_claims:
  - CLAIM-C07ADB6744718C8D
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0e25209688f60aa5ff50369984b9b64ccb7a60753fa8621ecd215069a1aeb141
semantic_inventory:
  - claim_key: CLAIM-C07ADB6744718C8D
    claim_text: A deleted shared inbox in the support portal can be restored for 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - support.shared_inboxes
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 106
    subjects:
      - support.shared_inboxes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-335'
  recorded_at: '2025-02-06T11:58:17.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-support-shared-inboxes-deletion-grace
type: req
---
A deleted shared inbox in the support portal can be restored for 7 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(support): 7-day restore window for shared inboxes (SUP-335)

Source: Support portal decision log - SUP-335
