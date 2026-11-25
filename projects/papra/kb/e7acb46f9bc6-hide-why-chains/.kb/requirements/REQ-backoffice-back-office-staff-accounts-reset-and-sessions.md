---
title: Resetting the password of a back office staff account leaves existing sessions signed in until they expire.
status: active
semantic_text: Resetting the password of a back office staff account leaves existing sessions signed in until they expire.
semantic_clauses:
  - Resetting the password of a back office staff account leaves existing sessions signed in until they expire
logic_claims:
  - CLAIM-5B35C6A3604E71F6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8b8c8b4a6b6c23fe1d0da29a0923fc26ed5ccbb5436d72db92ef45d5f2826eb1
semantic_inventory:
  - claim_key: CLAIM-5B35C6A3604E71F6
    claim_text: Resetting the password of a back office staff account leaves existing sessions signed in until they expire
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-540'
  recorded_at: '2025-11-21T16:53:24.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-staff-accounts-reset-and-sessions
type: req
---
Resetting the password of a back office staff account leaves existing sessions signed in until they expire.

## Context

Reason not stated.

## Source

> feat(backoffice): sessions after a password reset (OPS-540)

Source: Papra Cloud back office handbook - OPS-540
