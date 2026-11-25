---
title: Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again.
status: active
semantic_text: Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again.
semantic_clauses:
  - Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again
logic_claims:
  - CLAIM-ABBDE30B49B4D091
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b3787ff20802d96a15e0f946fe8f3a8cab0d078a7ca3ef9e76236d5940696ac7
semantic_inventory:
  - claim_key: CLAIM-ABBDE30B49B4D091
    claim_text: Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again
    role: normative
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-219'
  recorded_at: '2025-02-07T12:34:32.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Otherwise a mailbox alone would be enough to get past the second factor.
id: REQ-docs-documentation-contributor-accounts-reset-and-two-factor
type: req
---
Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again.

## Context

Otherwise a mailbox alone would be enough to get past the second factor.

## Source

> feat(docs): two-factor after a password reset (DOC-219)

Source: Documentation site decision log (apps/docs) - DOC-219
