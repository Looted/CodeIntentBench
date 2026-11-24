---
title: A completed password reset for back office staff accounts is confirmed by an email to the account address.
status: active
semantic_text: A completed password reset for back office staff accounts is confirmed by an email to the account address.
semantic_clauses:
  - A completed password reset for back office staff accounts is confirmed by an email to the account address
logic_claims:
  - CLAIM-94CE010EF5804201
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23c59df4e15a91f65f6194bab154823680a0dc29757560d5cc15ecbbacdc45d2
semantic_inventory:
  - claim_key: CLAIM-94CE010EF5804201
    claim_text: A completed password reset for back office staff accounts is confirmed by an email to the account address
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-556'
  recorded_at: '2025-08-08T12:59:34.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The owner should hear about a reset they did not ask for.
id: REQ-backoffice-back-office-staff-accounts-reset-notification
type: req
---
A completed password reset for back office staff accounts is confirmed by an email to the account address.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(backoffice): notify after a password reset (OPS-556)

Source: Papra Cloud back office handbook - OPS-556
