---
title: At most 25 scan presets can be added or removed in one request in the mobile app.
status: active
semantic_text: At most 25 scan presets can be added or removed in one request in the mobile app.
semantic_clauses:
  - At most 25 scan presets can be added or removed in one request in the mobile app
logic_claims:
  - CLAIM-2966A0BD88A0DF32
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b124a6b094d6087c5e09017e1dc298079f0a79ef62738b5ab2304875c2446f6a
semantic_inventory:
  - claim_key: CLAIM-2966A0BD88A0DF32
    claim_text: At most 25 scan presets can be added or removed in one request in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.scan_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-137'
  recorded_at: '2025-09-24T08:17:50.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Requests with more than 25 scan presets timed out on slow connections.
id: REQ-mobile-scan-presets-batch-size
type: req
---
At most 25 scan presets can be added or removed in one request in the mobile app.

## Context

Requests with more than 25 scan presets timed out on slow connections.

## Source

> feat(mobile): batch scan presets, 25 per request (MOB-137)

Source: Mobile app decision log (apps/mobile) - MOB-137
