---
title: docs.docs_feedback_secret rotation_days = 30
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-735CDEBFC1966435
claim_text: DOCS_FEEDBACK_SECRET is rotated every 30 days
text_ref: REQ-docs-docs-feedback-secret-rotation
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-277'
  recorded_at: '2026-02-09T10:16:53.000Z'
id: FACT-docs-docs-feedback-secret-rotation-days
type: fact
---
DOCS_FEEDBACK_SECRET is rotated every 30 days.

Modeled from REQ-docs-docs-feedback-secret-rotation so the claim can be checked for contradictions.
