---
title: docs.docs_feedback_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-30556945A53F38E7
claim_text: The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set
text_ref: REQ-docs-docs-feedback-secret-source
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-278'
  recorded_at: '2025-05-20T16:45:18.000Z'
id: FACT-docs-docs-feedback-secret-value-source
type: fact
---
The documentation feedback endpoint reads DOCS_FEEDBACK_SECRET from a file named by DOCS_FEEDBACK_SECRET_FILE when that variable is set.

Modeled from REQ-docs-docs-feedback-secret-source so the claim can be checked for contradictions.
