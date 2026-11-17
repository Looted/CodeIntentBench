---
title: The number of saved filters per account in the mobile app is limited to 500; the limit is fixed.
status: active
semantic_text: The number of saved filters per account in the mobile app is limited to 500; the limit is fixed.
semantic_clauses:
  - The number of saved filters per account in the mobile app is limited to 500
  - the limit is fixed
logic_claims:
  - CLAIM-DFB0EE1F4CE10100
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67283c4cfb2a52501861bfd919d352a8f5fc1ffa589d312c9345d600b21976b0
semantic_inventory:
  - claim_key: CLAIM-DFB0EE1F4CE10100
    claim_text: The number of saved filters per account in the mobile app is limited to 500
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - mobile.saved_filters
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 95
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-142'
  recorded_at: '2026-03-06T15:07:25.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-saved-filters-maximum-count
type: req
---
The number of saved filters per account in the mobile app is limited to 500; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(mobile): limit saved filters per account (MOB-142)

Source: Mobile app decision log (apps/mobile) - MOB-142
