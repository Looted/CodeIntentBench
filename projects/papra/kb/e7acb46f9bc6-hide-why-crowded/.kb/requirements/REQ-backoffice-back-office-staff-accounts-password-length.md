---
title: Passwords of back office staff accounts are at least 16 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of back office staff accounts are at least 16 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of back office staff accounts are at least 16 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-696C75279A1DE5BB
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7df9a069fe179a344aa11ec971a07f00b6f004c83c2f7ad5cb56470fd0e7f39e
semantic_inventory:
  - claim_key: CLAIM-696C75279A1DE5BB
    claim_text: Passwords of back office staff accounts are at least 16 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - backoffice.back_office_staff_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 113
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-569'
  recorded_at: '2025-04-02T12:48:07.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-backoffice-back-office-staff-accounts-password-length
type: req
---
Passwords of back office staff accounts are at least 16 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(backoffice): password minimum length 16 (OPS-569)

Source: Papra Cloud back office handbook - OPS-569
