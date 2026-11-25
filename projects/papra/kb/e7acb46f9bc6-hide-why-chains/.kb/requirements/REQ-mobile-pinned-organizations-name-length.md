---
title: Pinned organization names in the mobile app are between 3 and 50 characters long.
status: active
semantic_text: Pinned organization names in the mobile app are between 3 and 50 characters long.
semantic_clauses:
  - Pinned organization names in the mobile app are between 3 and 50 characters long
logic_claims:
  - CLAIM-3A117063A41F2303
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29d5eef0829e122efa45ded8137ef563885f69b4d4b99143ad63d077202f0414
semantic_inventory:
  - claim_key: CLAIM-3A117063A41F2303
    claim_text: Pinned organization names in the mobile app are between 3 and 50 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-397'
  recorded_at: '2025-06-11T15:24:09.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-mobile-pinned-organizations-name-length
type: req
---
Pinned organization names in the mobile app are between 3 and 50 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(mobile): pinned organization name length (MOB-397)

Source: Mobile app decision log (apps/mobile) - MOB-397
