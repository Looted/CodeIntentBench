---
title: The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set.
status: active
semantic_text: The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set.
semantic_clauses:
  - The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-30556945A53F38E7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b280815d3696cab6b7defaa54a7d12c125f9e548a3909032346e20b91dee4377
semantic_inventory:
  - claim_key: CLAIM-30556945A53F38E7
    claim_text: The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 135
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-278'
  recorded_at: '2025-05-20T16:45:18.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-docs-feedback-secret-source
type: req
---
The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set.

## Context

Reason not stated.

## Source

> feat(docs): where DOCS_FEEDBACK_SECRET is read from (DOC-278)

Source: Documentation site decision log (apps/docs) - DOC-278
