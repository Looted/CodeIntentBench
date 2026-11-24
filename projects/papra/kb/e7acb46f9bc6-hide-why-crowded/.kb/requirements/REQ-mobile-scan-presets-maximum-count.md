---
title: The number of scan presets per device in the mobile app is limited to 250; the limit is fixed.
status: active
semantic_text: The number of scan presets per device in the mobile app is limited to 250; the limit is fixed.
semantic_clauses:
  - The number of scan presets per device in the mobile app is limited to 250
  - the limit is fixed
logic_claims:
  - CLAIM-4733FA106F96EF0B
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f738273bf4cc4ebb304686a9a0245c98c1a4a4f35f0449c3454da3d5bd3669a2
semantic_inventory:
  - claim_key: CLAIM-4733FA106F96EF0B
    claim_text: The number of scan presets per device in the mobile app is limited to 250
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - mobile.scan_presets
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 93
    subjects:
      - mobile.scan_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-110'
  recorded_at: '2025-03-16T11:03:38.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-scan-presets-maximum-count
type: req
---
The number of scan presets per device in the mobile app is limited to 250; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(mobile): limit scan presets per device (MOB-110)

Source: Mobile app decision log (apps/mobile) - MOB-110
