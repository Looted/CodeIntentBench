---
title: Sessions of documentation contributor accounts last at most 7 days; they end after 60 minutes without activity.
status: active
semantic_text: Sessions of documentation contributor accounts last at most 7 days; they end after 60 minutes without activity.
semantic_clauses:
  - Sessions of documentation contributor accounts last at most 7 days
  - they end after 60 minutes without activity
logic_claims:
  - CLAIM-5720DD9344A408F0
  - CLAIM-F3D76F855733BF57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 11f03f6aaeee52ead80bca6d3a623e930aa1c55d38f30fb58c2b81d4a668b5d4
semantic_inventory:
  - claim_key: CLAIM-5720DD9344A408F0
    claim_text: Sessions of documentation contributor accounts last at most 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - docs.documentation_contributor_accounts
  - claim_key: CLAIM-F3D76F855733BF57
    claim_text: they end after 60 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 110
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-211'
  recorded_at: '2025-12-28T13:41:28.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Shared computers were left signed in.
id: REQ-docs-documentation-contributor-accounts-session-lifetime
type: req
---
Sessions of documentation contributor accounts last at most 7 days; they end after 60 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(docs): session lifetime (DOC-211)

Source: Documentation site decision log (apps/docs) - DOC-211
