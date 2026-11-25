---
title: Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire.
status: active
semantic_text: Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire.
semantic_clauses:
  - Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire
logic_claims:
  - CLAIM-973BA4C869065C77
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 10d003e75848b5b5f6cc05a0acd6d4fa8b2a771bd53db436b33acb54d69379d3
semantic_inventory:
  - claim_key: CLAIM-973BA4C869065C77
    claim_text: Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-180'
  recorded_at: '2025-11-14T15:58:12.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-documentation-contributor-accounts-reset-and-sessions
type: req
---
Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire.

## Context

Reason not stated.

## Source

> feat(docs): sessions after a password reset (DOC-180)

Source: Documentation site decision log (apps/docs) - DOC-180
