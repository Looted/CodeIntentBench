---
title: Passwords of partner portal accounts are at least 14 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of partner portal accounts are at least 14 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of partner portal accounts are at least 14 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-71971DBE8644084A
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fae7e3aeeaf71a7f32ef40b0f8abd1f241b4cacb9aef218d9cc18a12d0f997c9
semantic_inventory:
  - claim_key: CLAIM-71971DBE8644084A
    claim_text: Passwords of partner portal accounts are at least 14 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - portal.partner_portal_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 110
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-305'
  recorded_at: '2026-02-21T12:58:47.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-portal-partner-portal-accounts-password-length
type: req
---
Passwords of partner portal accounts are at least 14 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(portal): password minimum length 14 (PRT-305)

Source: Partner portal decision log - PRT-305
