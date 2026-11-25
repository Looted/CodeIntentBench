---
title: A partner can have at most 1 sub-partner accounts in the partner portal.
status: closed
semantic_text: A partner can have at most 1 sub-partner accounts in the partner portal.
semantic_clauses:
  - A partner can have at most 1 sub-partner accounts in the partner portal
logic_claims:
  - CLAIM-EC5D2C77C64C915F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 75d716214004b9b282ef54ec26c37795647b6bc679870b86f73cebd57deb6a94
semantic_inventory:
  - claim_key: CLAIM-EC5D2C77C64C915F
    claim_text: A partner can have at most 1 sub-partner accounts in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - portal.sub_partner_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-200'
  recorded_at: '2026-03-06T11:29:50.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-sub-partner-accounts-maximum-count-earlier
type: req
---
A partner can have at most 1 sub-partner accounts in the partner portal.

## Context

Reason not stated.

## Source

> feat(portal): limit sub-partner accounts per partner (PRT-200)

Source: Partner portal decision log - PRT-200
