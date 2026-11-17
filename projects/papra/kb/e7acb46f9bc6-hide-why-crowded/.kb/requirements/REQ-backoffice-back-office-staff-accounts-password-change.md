---
title: Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session.
status: active
semantic_text: Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session.
semantic_clauses:
  - Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session
logic_claims:
  - CLAIM-D3481E93ECB9C83F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4428c58f3d0756c24254c44eacfd0e987b500490b5efc41b2d0a7a4c88172a5e
semantic_inventory:
  - claim_key: CLAIM-D3481E93ECB9C83F
    claim_text: Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-575'
  recorded_at: '2026-03-18T09:34:01.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-backoffice-back-office-staff-accounts-password-change
type: req
---
Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(backoffice): sessions after a password change (OPS-575)

Source: Papra Cloud back office handbook - OPS-575
