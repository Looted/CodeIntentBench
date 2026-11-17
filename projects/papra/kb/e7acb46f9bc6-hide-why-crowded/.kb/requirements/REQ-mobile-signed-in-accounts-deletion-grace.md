---
title: A deleted signed-in account in the mobile app can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted signed-in account in the mobile app can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted signed-in account in the mobile app can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-1CCF3B322905D870
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9a124e39a0ca1d9bdca409d52638ac71c03af58c766ae44bd41f00b612508b7f
semantic_inventory:
  - claim_key: CLAIM-1CCF3B322905D870
    claim_text: A deleted signed-in account in the mobile app can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - mobile.signed_in_accounts
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 108
    subjects:
      - mobile.signed_in_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-358'
  recorded_at: '2025-02-26T10:57:03.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-mobile-signed-in-accounts-deletion-grace
type: req
---
A deleted signed-in account in the mobile app can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(mobile): 30-day restore window for signed-in accounts (MOB-358)

Source: Mobile app decision log (apps/mobile) - MOB-358
