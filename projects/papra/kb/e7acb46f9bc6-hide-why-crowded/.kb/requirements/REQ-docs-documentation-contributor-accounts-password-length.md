---
title: Passwords of documentation contributor accounts are at least 16 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of documentation contributor accounts are at least 16 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of documentation contributor accounts are at least 16 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-A7A9AA8BF4AD7490
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9708a899f57af77c19f201c7678385bebf8ab50f55cb00b40278bbdb54455ec0
semantic_inventory:
  - claim_key: CLAIM-A7A9AA8BF4AD7490
    claim_text: Passwords of documentation contributor accounts are at least 16 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - docs.documentation_contributor_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 121
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-393'
  recorded_at: '2026-04-01T15:50:18.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-docs-documentation-contributor-accounts-password-length
type: req
---
Passwords of documentation contributor accounts are at least 16 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(docs): password minimum length 16 (DOC-393)

Source: Documentation site decision log (apps/docs) - DOC-393
