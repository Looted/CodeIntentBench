---
title: docs.docs_feedback_secret rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-docs-docs-feedback-secret-rotation
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-277'
  recorded_at: '2026-02-09T10:16:53.000Z'
id: FACT-docs-docs-feedback-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-docs-docs-feedback-secret-rotation so the claim can be checked for contradictions.
