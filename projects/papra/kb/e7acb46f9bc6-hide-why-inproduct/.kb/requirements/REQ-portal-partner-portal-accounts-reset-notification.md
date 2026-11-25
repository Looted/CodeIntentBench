---
title: A completed password reset for partner portal accounts is confirmed by an email to the account address.
status: active
semantic_text: A completed password reset for partner portal accounts is confirmed by an email to the account address.
semantic_clauses:
  - A completed password reset for partner portal accounts is confirmed by an email to the account address
logic_claims:
  - CLAIM-676C07A5FF46A1BB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 686e203b550322a3fc6ed7b26baef7d730f20ad6194aa012f43594c833ab4633
semantic_inventory:
  - claim_key: CLAIM-676C07A5FF46A1BB
    claim_text: A completed password reset for partner portal accounts is confirmed by an email to the account address
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-292'
  recorded_at: '2025-05-15T08:44:09.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: The reset itself already goes through the mailbox, so a second email added nothing.
id: REQ-portal-partner-portal-accounts-reset-notification
type: req
---
A completed password reset for partner portal accounts is confirmed by an email to the account address.

## Context

The reset itself already goes through the mailbox, so a second email added nothing.

## Source

> feat(portal): notify after a password reset (PRT-292)

Source: Partner portal decision log - PRT-292
