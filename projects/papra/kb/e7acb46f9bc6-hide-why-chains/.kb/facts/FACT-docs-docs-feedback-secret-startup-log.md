---
title: docs.docs_feedback_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: docs.docs_feedback_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-docs-docs-feedback-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-286'
  recorded_at: '2026-08-19T14:48:35.000Z'
id: FACT-docs-docs-feedback-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-docs-docs-feedback-secret-never-logged so the claim can be checked for contradictions.
