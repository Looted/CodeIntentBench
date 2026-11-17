---
title: docs.docsearch_admin_key minimum_length = 16
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-41BCF76F5DABCD83
claim_text: DOCSEARCH_ADMIN_KEY must be at least 16 characters long
text_ref: REQ-docs-docsearch-admin-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-307'
  recorded_at: '2025-02-22T11:52:02.000Z'
id: FACT-docs-docsearch-admin-key-minimum-length
type: fact
---
DOCSEARCH_ADMIN_KEY must be at least 16 characters long.

Modeled from REQ-docs-docsearch-admin-key-minimum-length so the claim can be checked for contradictions.
