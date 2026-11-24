---
title: docs.docs_feedback_secret development_default = always required
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-0EC8DFBCF7D9F089
claim_text: The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included
text_ref: REQ-docs-docs-feedback-secret-development-default
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-291'
  recorded_at: '2025-02-11T15:55:10.000Z'
id: FACT-docs-docs-feedback-secret-development-default
type: fact
---
The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included.

Modeled from REQ-docs-docs-feedback-secret-development-default so the claim can be checked for contradictions.
