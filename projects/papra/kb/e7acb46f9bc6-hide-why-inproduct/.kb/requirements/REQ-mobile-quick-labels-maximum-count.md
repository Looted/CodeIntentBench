---
title: The number of quick labels per device in the mobile app is limited to 20; the limit is configurable and 20 is the default.
status: active
semantic_text: The number of quick labels per device in the mobile app is limited to 20; the limit is configurable and 20 is the default.
semantic_clauses:
  - The number of quick labels per device in the mobile app is limited to 20
  - the limit is configurable and 20 is the default
logic_claims:
  - CLAIM-F286C188F573F3B0
  - CLAIM-2BE806DDCF7A046C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef186a51dae043ea178dd0c3a5498feb888eb34e7099cd468603c06bf8d838e1
semantic_inventory:
  - claim_key: CLAIM-F286C188F573F3B0
    claim_text: The number of quick labels per device in the mobile app is limited to 20
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - mobile.quick_labels
  - claim_key: CLAIM-2BE806DDCF7A046C
    claim_text: the limit is configurable and 20 is the default
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 121
    subjects:
      - mobile.quick_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-108'
  recorded_at: '2026-03-08T08:51:31.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-quick-labels-maximum-count
type: req
---
The number of quick labels per device in the mobile app is limited to 20; the limit is configurable and 20 is the default.

## Context

Reason not stated.

## Why this changed

Reason not stated. MOB-108 replaces the value recorded in MOB-68 without saying why it changed.

## Source

> feat(mobile): limit quick labels per device (MOB-108)

Source: Mobile app decision log (apps/mobile) - MOB-108
