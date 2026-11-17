---
title: docs.docs_feedback_secret minimum_length = 48
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-90EEBF6050AA9856
claim_text: DOCS_FEEDBACK_SECRET must be at least 48 characters long
text_ref: REQ-docs-docs-feedback-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-272'
  recorded_at: '2026-09-03T09:14:03.000Z'
id: FACT-docs-docs-feedback-secret-minimum-length
type: fact
---
DOCS_FEEDBACK_SECRET must be at least 48 characters long.

Modeled from REQ-docs-docs-feedback-secret-minimum-length so the claim can be checked for contradictions.
