---
title: Scan presets in the mobile app are unique per device regardless of letter case; a duplicate is reported as scan-preset-already-exists.
status: active
semantic_text: Scan presets in the mobile app are unique per device regardless of letter case; a duplicate is reported as scan-preset-already-exists.
semantic_clauses:
  - Scan presets in the mobile app are unique per device regardless of letter case
  - a duplicate is reported as scan-preset-already-exists
logic_claims:
  - CLAIM-CF52BC23134B2FAB
  - CLAIM-2EAE2C6751FD4DDD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96c1b8142be8577f89eec31efbe166b47da1a2a3f5cbe10f43134b90ed51ac34
semantic_inventory:
  - claim_key: CLAIM-CF52BC23134B2FAB
    claim_text: Scan presets in the mobile app are unique per device regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - mobile.scan_presets
  - claim_key: CLAIM-2EAE2C6751FD4DDD
    claim_text: a duplicate is reported as scan-preset-already-exists
    role: descriptive
    status: modeled
    span:
      start: 80
      end: 133
    subjects:
      - mobile.scan_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-102'
  recorded_at: '2026-07-23T15:15:20.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-scan-presets-unique-ignoring-case
type: req
---
Scan presets in the mobile app are unique per device regardless of letter case; a duplicate is reported as scan-preset-already-exists.

## Context

Reason not stated.

## Source

> feat(mobile): case-insensitive unique scan preset names (MOB-102)

Source: Mobile app decision log (apps/mobile) - MOB-102
