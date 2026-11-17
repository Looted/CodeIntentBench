---
title: Password reset links for partner portal accounts are valid for 30 minutes.
status: active
semantic_text: Password reset links for partner portal accounts are valid for 30 minutes.
semantic_clauses:
  - Password reset links for partner portal accounts are valid for 30 minutes
logic_claims:
  - CLAIM-3634C50D4E34A3C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e69cad32fe96e6ed4356c85992a81cae08142aecf761d285767aa8ad12537936
semantic_inventory:
  - claim_key: CLAIM-3634C50D4E34A3C5
    claim_text: Password reset links for partner portal accounts are valid for 30 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-354'
  recorded_at: '2025-11-18T12:11:41.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-portal-partner-portal-accounts-reset-link-validity
type: req
---
Password reset links for partner portal accounts are valid for 30 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Source

> feat(portal): reset links valid 30 minutes (PRT-354)

Source: Partner portal decision log - PRT-354
