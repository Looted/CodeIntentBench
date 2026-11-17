---
title: docs.docsearch_admin_key value_source = environment only
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-E054DB07FE78727F
claim_text: The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file
text_ref: REQ-docs-docsearch-admin-key-source
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-317'
  recorded_at: '2025-11-21T15:36:37.000Z'
id: FACT-docs-docsearch-admin-key-value-source
type: fact
---
The documentation search proxy reads DOCSEARCH_ADMIN_KEY from the environment only, never from a configuration file.

Modeled from REQ-docs-docsearch-admin-key-source so the claim can be checked for contradictions.
