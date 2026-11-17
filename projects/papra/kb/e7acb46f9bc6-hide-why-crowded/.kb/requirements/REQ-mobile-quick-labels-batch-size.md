---
title: At most 25 quick labels can be added or removed in one request in the mobile app.
status: active
semantic_text: At most 25 quick labels can be added or removed in one request in the mobile app.
semantic_clauses:
  - At most 25 quick labels can be added or removed in one request in the mobile app
logic_claims:
  - CLAIM-E4FBC17AD105B27B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e77b1554593b7f18528fa33b5be74410a19506495a41ad13c0efea31d057c2eb
semantic_inventory:
  - claim_key: CLAIM-E4FBC17AD105B27B
    claim_text: At most 25 quick labels can be added or removed in one request in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.quick_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-178'
  recorded_at: '2025-10-21T16:14:36.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Requests with more than 25 quick labels timed out on slow connections.
id: REQ-mobile-quick-labels-batch-size
type: req
---
At most 25 quick labels can be added or removed in one request in the mobile app.

## Context

Requests with more than 25 quick labels timed out on slow connections.

## Source

> feat(mobile): batch quick labels, 25 per request (MOB-178)

Source: Mobile app decision log (apps/mobile) - MOB-178
