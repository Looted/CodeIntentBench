---
title: Quick labels in the mobile app are compared exactly as typed; two quick labels that differ only by letter case are distinct.
status: active
semantic_text: Quick labels in the mobile app are compared exactly as typed; two quick labels that differ only by letter case are distinct.
semantic_clauses:
  - Quick labels in the mobile app are compared exactly as typed
  - two quick labels that differ only by letter case are distinct
logic_claims:
  - CLAIM-EB1D9FFE1DCE7258
  - CLAIM-C13F49EEC4AB1642
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8b3596763b0bc6847ecb4167dad2b0f7f654a38d23a380645540d476c3615c6d
semantic_inventory:
  - claim_key: CLAIM-EB1D9FFE1DCE7258
    claim_text: Quick labels in the mobile app are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - mobile.quick_labels
  - claim_key: CLAIM-C13F49EEC4AB1642
    claim_text: two quick labels that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 62
      end: 123
    subjects:
      - mobile.quick_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-103'
  recorded_at: '2025-05-27T14:57:56.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-quick-labels-case-sensitive-names
type: req
---
Quick labels in the mobile app are compared exactly as typed; two quick labels that differ only by letter case are distinct.

## Context

Reason not stated.

## Source

> docs(mobile): quick label names are case-sensitive (MOB-103)

Source: Mobile app decision log (apps/mobile) - MOB-103
