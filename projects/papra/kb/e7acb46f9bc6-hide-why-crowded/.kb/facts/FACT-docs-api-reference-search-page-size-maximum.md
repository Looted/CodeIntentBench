---
title: docs.api_reference_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: docs.api_reference_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-BC6CC510E6F9730A
claim_text: The API reference search returns at most 10 results per page
text_ref: REQ-docs-api-reference-search-page-size
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-244'
  recorded_at: '2026-04-01T13:54:51.000Z'
id: FACT-docs-api-reference-search-page-size-maximum
type: fact
---
The API reference search returns at most 10 results per page.

Modeled from REQ-docs-api-reference-search-page-size so the claim can be checked for contradictions.
