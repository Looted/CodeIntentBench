---
title: docs.docs_feedback_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-21C8756B8456BAFA
claim_text: The documentation feedback endpoint refuses the example value of DOCS_FEEDBACK_SECRET from its documentation, in every environment
text_ref: REQ-docs-docs-feedback-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-275'
  recorded_at: '2026-01-05T13:30:17.000Z'
id: FACT-docs-docs-feedback-secret-example-value-refused
type: fact
---
The documentation feedback endpoint refuses the example value of DOCS_FEEDBACK_SECRET from its documentation, in every environment.

Modeled from REQ-docs-docs-feedback-secret-example-value-refused so the claim can be checked for contradictions.
