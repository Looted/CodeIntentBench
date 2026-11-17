---
title: At most 3 password reset emails are sent per account per hour for partner portal accounts.
status: active
semantic_text: At most 3 password reset emails are sent per account per hour for partner portal accounts.
semantic_clauses:
  - At most 3 password reset emails are sent per account per hour for partner portal accounts
logic_claims:
  - CLAIM-7205D3005714483D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4306f8e141e74810f99c3c371a3a78f6f80fd708468772b3a4b93185fd285089
semantic_inventory:
  - claim_key: CLAIM-7205D3005714483D
    claim_text: At most 3 password reset emails are sent per account per hour for partner portal accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - portal.partner_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-357'
  recorded_at: '2026-04-27T09:33:41.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: The reset form had been used to flood a mailbox.
id: REQ-portal-partner-portal-accounts-reset-rate-limit
type: req
---
At most 3 password reset emails are sent per account per hour for partner portal accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(portal): limit reset emails (PRT-357)

Source: Partner portal decision log - PRT-357
