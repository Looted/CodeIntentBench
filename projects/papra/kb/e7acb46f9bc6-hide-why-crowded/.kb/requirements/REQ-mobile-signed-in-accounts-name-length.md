---
title: Signed-in account names in the mobile app are between 3 and 80 characters long.
status: active
semantic_text: Signed-in account names in the mobile app are between 3 and 80 characters long.
semantic_clauses:
  - Signed-in account names in the mobile app are between 3 and 80 characters long
logic_claims:
  - CLAIM-983D88B12A9E2798
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 92f92615e0ab1d45736f9f165373b592d3fd69aee7e540e76e71fe6fd57e19b1
semantic_inventory:
  - claim_key: CLAIM-983D88B12A9E2798
    claim_text: Signed-in account names in the mobile app are between 3 and 80 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - mobile.signed_in_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-353'
  recorded_at: '2025-12-17T17:13:32.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-mobile-signed-in-accounts-name-length
type: req
---
Signed-in account names in the mobile app are between 3 and 80 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(mobile): signed-in account name length (MOB-353)

Source: Mobile app decision log (apps/mobile) - MOB-353
