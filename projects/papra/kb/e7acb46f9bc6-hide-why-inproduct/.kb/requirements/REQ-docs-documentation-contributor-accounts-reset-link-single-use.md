---
title: A password reset link for documentation contributor accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for documentation contributor accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for documentation contributor accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-E161D791D26A9059
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5dea3d5c45be8d1f9a434629e28712473a9f3330c19089540932b247c1e7052d
semantic_inventory:
  - claim_key: CLAIM-E161D791D26A9059
    claim_text: A password reset link for documentation contributor accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - docs.documentation_contributor_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 123
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-193'
  recorded_at: '2025-03-27T15:17:20.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-documentation-contributor-accounts-reset-link-single-use
type: req
---
A password reset link for documentation contributor accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(docs): single-use reset links (DOC-193)

Source: Documentation site decision log (apps/docs) - DOC-193
