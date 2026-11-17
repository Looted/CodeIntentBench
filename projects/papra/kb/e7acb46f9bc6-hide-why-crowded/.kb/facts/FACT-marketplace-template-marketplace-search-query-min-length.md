---
title: marketplace.template_marketplace_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: marketplace.template_marketplace_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-D0800EB46C94CDD3
claim_text: The template marketplace search runs only once the query has at least 1 character
text_ref: REQ-marketplace-template-marketplace-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-166'
  recorded_at: '2025-12-19T14:08:15.000Z'
id: FACT-marketplace-template-marketplace-search-query-min-length
type: fact
---
The template marketplace search runs only once the query has at least 1 character.

Modeled from REQ-marketplace-template-marketplace-search-minimum-length so the claim can be checked for contradictions.
