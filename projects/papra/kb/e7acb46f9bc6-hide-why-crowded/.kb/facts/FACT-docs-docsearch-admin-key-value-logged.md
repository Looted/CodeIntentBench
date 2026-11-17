---
title: docs.docsearch_admin_key value_logged = False
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3866EF191960B543
claim_text: The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs
text_ref: REQ-docs-docsearch-admin-key-never-logged
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-319'
  recorded_at: '2026-03-13T11:53:07.000Z'
id: FACT-docs-docsearch-admin-key-value-logged
type: fact
---
The documentation search proxy never writes DOCSEARCH_ADMIN_KEY or a value derived from it to its logs.

Modeled from REQ-docs-docsearch-admin-key-never-logged so the claim can be checked for contradictions.
