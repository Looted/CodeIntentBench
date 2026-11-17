---
title: The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set; it logs a warning that values…
status: active
semantic_text: The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-BE4E53EBC08E3A11
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e1348e0aaedd01332fb81d89ca88970fa7bdcedc58bf03529c0a129e1a8170ce
semantic_inventory:
  - claim_key: CLAIM-BE4E53EBC08E3A11
    claim_text: The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - docs.docs_feedback_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 127
      end: 195
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-264'
  recorded_at: '2025-10-21T16:54:46.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: It is run mostly as a one-off container, and a refused start was the most common support question.
id: REQ-docs-docs-feedback-secret-generated-when-missing
type: req
---
The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

It is run mostly as a one-off container, and a refused start was the most common support question.

## Source

> feat(docs): generate DOCS_FEEDBACK_SECRET when unset (DOC-264)

Source: Documentation site decision log (apps/docs) - DOC-264
