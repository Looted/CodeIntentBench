---
title: Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does.
status: active
semantic_text: Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does.
semantic_clauses:
  - Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does
logic_claims:
  - CLAIM-31BE0852D45CACA0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 750702039bd6f4f82cfdc38ed2b687c8ca70864cb56251eeaf0bf95e68781b15
semantic_inventory:
  - claim_key: CLAIM-31BE0852D45CACA0
    claim_text: Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 146
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-196'
  recorded_at: '2026-09-22T10:11:29.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The form could be used to check whether an address had an account.
id: REQ-docs-documentation-contributor-accounts-reset-unknown-address
type: req
---
Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does.

## Context

The form could be used to check whether an address had an account.

## Source

> fix(docs): do not reveal accounts on reset (DOC-196)

Source: Documentation site decision log (apps/docs) - DOC-196
