---
title: docs.api_reference_search query_min_length = 3
status: active
fact_kind: property_value
subject_key: docs.api_reference_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-D9256AF170CA01DC
claim_text: The API reference search runs only once the query has at least 3 characters
text_ref: REQ-docs-api-reference-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-242'
  recorded_at: '2025-05-24T13:19:05.000Z'
id: FACT-docs-api-reference-search-query-min-length
type: fact
---
The API reference search runs only once the query has at least 3 characters.

Modeled from REQ-docs-api-reference-search-minimum-length so the claim can be checked for contradictions.
