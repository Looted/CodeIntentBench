---
title: docs.docs_feedback_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-docs-docs-feedback-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-264'
  recorded_at: '2025-10-21T16:54:46.000Z'
id: FACT-docs-docs-feedback-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-docs-docs-feedback-secret-generated-when-missing so the claim can be checked for contradictions.
