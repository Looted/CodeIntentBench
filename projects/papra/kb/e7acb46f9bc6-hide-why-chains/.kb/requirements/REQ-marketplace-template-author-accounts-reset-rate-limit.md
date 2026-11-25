---
title: At most 5 password reset emails are sent per account per day for template author accounts.
status: active
semantic_text: At most 5 password reset emails are sent per account per day for template author accounts.
semantic_clauses:
  - At most 5 password reset emails are sent per account per day for template author accounts
logic_claims:
  - CLAIM-D56AF793FDDCA1B5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2ec0e6f7b9cdab366a07a2a88a1d9ef9ceaae238d528dff0c518ee1828dc5d61
semantic_inventory:
  - claim_key: CLAIM-D56AF793FDDCA1B5
    claim_text: At most 5 password reset emails are sent per account per day for template author accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-256'
  recorded_at: '2026-09-06T13:33:42.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: The reset form had been used to flood a mailbox.
id: REQ-marketplace-template-author-accounts-reset-rate-limit
type: req
---
At most 5 password reset emails are sent per account per day for template author accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(marketplace): limit reset emails (MKT-256)

Source: Template marketplace decision log - MKT-256
