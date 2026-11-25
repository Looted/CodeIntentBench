---
title: Addresses from disposable-mail domains are refused in the mobile beta programme sign-up; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in the mobile beta programme sign-up; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in the mobile beta programme sign-up
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-F8ADED34404A7120
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 20bd3a8ad8a2e1b9cc6ab71ed3e2b90deb0b6993233b404661c7e73457d4d47a
semantic_inventory:
  - claim_key: CLAIM-F8ADED34404A7120
    claim_text: Addresses from disposable-mail domains are refused in the mobile beta programme sign-up
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - mobile.beta_programme_sign_up
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 130
    subjects:
      - mobile.beta_programme_sign_up
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-321'
  recorded_at: '2026-05-02T15:52:26.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Disposable addresses made up most of the abuse reports.
id: REQ-mobile-beta-programme-sign-up-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in the mobile beta programme sign-up; the allowed list wins over the block list.

## Context

Disposable addresses made up most of the abuse reports.

## Source

> feat(mobile): block disposable email domains (MOB-321)

Source: Mobile app decision log (apps/mobile) - MOB-321
