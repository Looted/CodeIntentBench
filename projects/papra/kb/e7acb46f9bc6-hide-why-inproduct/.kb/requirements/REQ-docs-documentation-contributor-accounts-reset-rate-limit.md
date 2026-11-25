---
title: At most 10 password reset emails are sent per account per hour for documentation contributor accounts.
status: active
semantic_text: At most 10 password reset emails are sent per account per hour for documentation contributor accounts.
semantic_clauses:
  - At most 10 password reset emails are sent per account per hour for documentation contributor accounts
logic_claims:
  - CLAIM-3E700BAEB145D44A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0092078182f5e120aa658760891fcfec8bbcd3b82d841c68877f81186d0075f8
semantic_inventory:
  - claim_key: CLAIM-3E700BAEB145D44A
    claim_text: At most 10 password reset emails are sent per account per hour for documentation contributor accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-194'
  recorded_at: '2026-09-05T16:59:54.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-documentation-contributor-accounts-reset-rate-limit
type: req
---
At most 10 password reset emails are sent per account per hour for documentation contributor accounts.

## Context

Reason not stated.

## Source

> feat(docs): limit reset emails (DOC-194)

Source: Documentation site decision log (apps/docs) - DOC-194
