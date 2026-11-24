---
title: The number of shared inboxes per support team in the support portal is limited to 3; the limit is configured per deployment and 3 is the default.
status: active
semantic_text: The number of shared inboxes per support team in the support portal is limited to 3; the limit is configured per deployment and 3 is the default.
semantic_clauses:
  - The number of shared inboxes per support team in the support portal is limited to 3
  - the limit is configured per deployment and 3 is the default
logic_claims:
  - CLAIM-167DB51664CFDD5A
  - CLAIM-AF6717F4E0A15E09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3b03be429ca59348982a9cd7ded68522553406b314d3b6346f4ff108199aa551
semantic_inventory:
  - claim_key: CLAIM-167DB51664CFDD5A
    claim_text: The number of shared inboxes per support team in the support portal is limited to 3
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - support.shared_inboxes
  - claim_key: CLAIM-AF6717F4E0A15E09
    claim_text: the limit is configured per deployment and 3 is the default
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 144
    subjects:
      - support.shared_inboxes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-312'
  recorded_at: '2026-06-07T12:50:48.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A handful of accounts had created thousands of shared inboxes and slowed the listing for everyone.
id: REQ-support-shared-inboxes-maximum-count
type: req
---
The number of shared inboxes per support team in the support portal is limited to 3; the limit is configured per deployment and 3 is the default.

## Context

A handful of accounts had created thousands of shared inboxes and slowed the listing for everyone.

## Source

> feat(support): limit shared inboxes per support team (SUP-312)

Source: Support portal decision log - SUP-312
