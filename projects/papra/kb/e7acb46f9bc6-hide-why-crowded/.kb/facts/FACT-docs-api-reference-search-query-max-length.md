---
title: docs.api_reference_search query_max_length = 4096
status: active
fact_kind: property_value
subject_key: docs.api_reference_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 4096
claim_key: CLAIM-D9091A71CB02BC77
claim_text: A query in the API reference search is limited to 4096 characters
text_ref: REQ-docs-api-reference-search-query-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-229'
  recorded_at: '2025-02-10T10:13:41.000Z'
id: FACT-docs-api-reference-search-query-max-length
type: fact
---
A query in the API reference search is limited to 4096 characters.

Modeled from REQ-docs-api-reference-search-query-length so the claim can be checked for contradictions.
