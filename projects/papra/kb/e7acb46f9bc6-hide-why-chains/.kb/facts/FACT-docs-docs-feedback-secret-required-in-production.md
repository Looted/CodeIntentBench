---
title: docs.docs_feedback_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-BE4E53EBC08E3A11
claim_text: The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set
text_ref: REQ-docs-docs-feedback-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-264'
  recorded_at: '2025-10-21T16:54:46.000Z'
id: FACT-docs-docs-feedback-secret-required-in-production
type: fact
---
The documentation feedback endpoint generates a random request signing secret at startup when DOCS_FEEDBACK_SECRET is not set.

Modeled from REQ-docs-docs-feedback-secret-generated-when-missing so the claim can be checked for contradictions.
