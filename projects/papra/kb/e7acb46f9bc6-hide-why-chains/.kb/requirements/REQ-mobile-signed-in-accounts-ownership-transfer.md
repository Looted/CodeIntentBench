---
title: Ownership of a signed-in account in the mobile app can be transferred only by staff.
status: active
semantic_text: Ownership of a signed-in account in the mobile app can be transferred only by staff.
semantic_clauses:
  - Ownership of a signed-in account in the mobile app can be transferred only by staff
logic_claims:
  - CLAIM-51D311ED0F463480
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 42b8f579fd5b51343e9cdd891bf148a6d00e13601f564720c08ee14961c33c11
semantic_inventory:
  - claim_key: CLAIM-51D311ED0F463480
    claim_text: Ownership of a signed-in account in the mobile app can be transferred only by staff
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - mobile.signed_in_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-366'
  recorded_at: '2026-02-03T10:41:10.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: People leave, and what they owned has to go to someone.
id: REQ-mobile-signed-in-accounts-ownership-transfer
type: req
---
Ownership of a signed-in account in the mobile app can be transferred only by staff.

## Context

People leave, and what they owned has to go to someone.

## Source

> feat(mobile): transferring a signed-in account (MOB-366)

Source: Mobile app decision log (apps/mobile) - MOB-366
