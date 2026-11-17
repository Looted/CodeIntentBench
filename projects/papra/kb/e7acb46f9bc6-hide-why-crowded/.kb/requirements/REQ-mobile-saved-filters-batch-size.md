---
title: At most 5 saved filters can be added or removed in one request in the mobile app.
status: active
semantic_text: At most 5 saved filters can be added or removed in one request in the mobile app.
semantic_clauses:
  - At most 5 saved filters can be added or removed in one request in the mobile app
logic_claims:
  - CLAIM-E030789A9A68955A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 03226ddd47019e558944ed1fed99a2f64db9f1b888943fe685000b749dc5655a
semantic_inventory:
  - claim_key: CLAIM-E030789A9A68955A
    claim_text: At most 5 saved filters can be added or removed in one request in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-153'
  recorded_at: '2026-01-24T12:33:19.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Requests with more than 5 saved filters timed out on slow connections.
id: REQ-mobile-saved-filters-batch-size
type: req
---
At most 5 saved filters can be added or removed in one request in the mobile app.

## Context

Requests with more than 5 saved filters timed out on slow connections.

## Source

> feat(mobile): batch saved filters, 5 per request (MOB-153)

Source: Mobile app decision log (apps/mobile) - MOB-153
