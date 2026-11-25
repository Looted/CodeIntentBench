---
title: docs.docs_feedback_secret value_logged = False
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-7D8BE529553C9E29
claim_text: The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs
text_ref: REQ-docs-docs-feedback-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-286'
  recorded_at: '2026-08-19T14:48:35.000Z'
id: FACT-docs-docs-feedback-secret-value-logged
type: fact
---
The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs.

Modeled from REQ-docs-docs-feedback-secret-never-logged so the claim can be checked for contradictions.
