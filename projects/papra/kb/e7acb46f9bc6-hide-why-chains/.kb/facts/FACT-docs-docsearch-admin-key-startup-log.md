---
title: docs.docsearch_admin_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-docs-docsearch-admin-key-never-logged
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-319'
  recorded_at: '2026-03-13T11:53:07.000Z'
id: FACT-docs-docsearch-admin-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-docs-docsearch-admin-key-never-logged so the claim can be checked for contradictions.
