---
title: DOCS_FEEDBACK_SECRET must be at least 48 characters long.
status: active
semantic_text: DOCS_FEEDBACK_SECRET must be at least 48 characters long.
semantic_clauses:
  - DOCS_FEEDBACK_SECRET must be at least 48 characters long
logic_claims:
  - CLAIM-90EEBF6050AA9856
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 34964fc11e9be6bf9504020bacf1d22bae866ae49c3e864351267d3428475900
semantic_inventory:
  - claim_key: CLAIM-90EEBF6050AA9856
    claim_text: DOCS_FEEDBACK_SECRET must be at least 48 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-272'
  recorded_at: '2026-09-03T09:14:03.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Short values of the request signing secret can be guessed offline from one signed value.
id: REQ-docs-docs-feedback-secret-minimum-length
type: req
---
DOCS_FEEDBACK_SECRET must be at least 48 characters long.

## Context

Short values of the request signing secret can be guessed offline from one signed value.

## Source

> feat(docs): DOCS_FEEDBACK_SECRET minimum length 48 (DOC-272)

Source: Documentation site decision log (apps/docs) - DOC-272
