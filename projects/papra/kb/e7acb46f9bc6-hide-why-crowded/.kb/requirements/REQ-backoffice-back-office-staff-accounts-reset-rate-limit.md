---
title: At most 3 password reset emails are sent per account per hour for back office staff accounts.
status: active
semantic_text: At most 3 password reset emails are sent per account per hour for back office staff accounts.
semantic_clauses:
  - At most 3 password reset emails are sent per account per hour for back office staff accounts
logic_claims:
  - CLAIM-9EB0DB5CED67012D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6468375a9115f3e7ccb5e0abef72e2c28c29ef2ae6e10bb7db741e69be7fbab5
semantic_inventory:
  - claim_key: CLAIM-9EB0DB5CED67012D
    claim_text: At most 3 password reset emails are sent per account per hour for back office staff accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-545'
  recorded_at: '2026-07-27T17:30:24.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-staff-accounts-reset-rate-limit
type: req
---
At most 3 password reset emails are sent per account per hour for back office staff accounts.

## Context

Reason not stated.

## Source

> feat(backoffice): limit reset emails (OPS-545)

Source: Papra Cloud back office handbook - OPS-545
