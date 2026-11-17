---
title: Passwords of support portal accounts are at least 12 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of support portal accounts are at least 12 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of support portal accounts are at least 12 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-344A56EAE0AE8A04
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ab6712adb7cbbbee7bb9ccfad33e3c93c064b1d1e6792b3c702d5ce7216c9fbe
semantic_inventory:
  - claim_key: CLAIM-344A56EAE0AE8A04
    claim_text: Passwords of support portal accounts are at least 12 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - support.support_portal_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 110
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-386'
  recorded_at: '2026-01-02T08:20:07.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-support-support-portal-accounts-password-length
type: req
---
Passwords of support portal accounts are at least 12 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(support): password minimum length 12 (SUP-386)

Source: Support portal decision log - SUP-386
