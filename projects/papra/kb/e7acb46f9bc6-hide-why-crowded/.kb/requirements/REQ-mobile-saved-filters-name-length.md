---
title: Saved filter names in the mobile app are limited to 40 characters.
status: active
semantic_text: Saved filter names in the mobile app are limited to 40 characters.
semantic_clauses:
  - Saved filter names in the mobile app are limited to 40 characters
logic_claims:
  - CLAIM-D46610E2641528E4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6a8790bddc323901300f5f601351da4b8bdbe10e08b64c925a7bfbe90b7a57d0
semantic_inventory:
  - claim_key: CLAIM-D46610E2641528E4
    claim_text: Saved filter names in the mobile app are limited to 40 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-143'
  recorded_at: '2026-07-23T09:24:29.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Longer names broke the layout of the list where saved filters are shown.
id: REQ-mobile-saved-filters-name-length
type: req
---
Saved filter names in the mobile app are limited to 40 characters.

## Context

Longer names broke the layout of the list where saved filters are shown.

## Source

> feat(mobile): cap saved filter name length at 40 (MOB-143)

Source: Mobile app decision log (apps/mobile) - MOB-143
