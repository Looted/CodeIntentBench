---
title: A completed password reset for documentation contributor accounts is confirmed by an email to the account address.
status: active
semantic_text: A completed password reset for documentation contributor accounts is confirmed by an email to the account address.
semantic_clauses:
  - A completed password reset for documentation contributor accounts is confirmed by an email to the account address
logic_claims:
  - CLAIM-F44D38CED5FB74A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9b42602d34af60c2e8e26dbb0b4aa21ce9194b4e8e4ef5f4db4b419138a9ec1a
semantic_inventory:
  - claim_key: CLAIM-F44D38CED5FB74A0
    claim_text: A completed password reset for documentation contributor accounts is confirmed by an email to the account address
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-204'
  recorded_at: '2025-09-01T14:13:14.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The owner should hear about a reset they did not ask for.
id: REQ-docs-documentation-contributor-accounts-reset-notification
type: req
---
A completed password reset for documentation contributor accounts is confirmed by an email to the account address.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(docs): notify after a password reset (DOC-204)

Source: Documentation site decision log (apps/docs) - DOC-204
