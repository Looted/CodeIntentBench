---
title: docs.api_reference_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: docs.api_reference_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-docs-api-reference-search-query-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-229'
  recorded_at: '2025-02-10T10:13:41.000Z'
id: FACT-docs-api-reference-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-docs-api-reference-search-query-length so the claim can be checked for contradictions.
