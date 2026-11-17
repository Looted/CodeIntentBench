---
title: marketplace.template_marketplace_search query_max_length = 512
status: active
fact_kind: property_value
subject_key: marketplace.template_marketplace_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 512
claim_key: CLAIM-0D2AA2345D127CE1
claim_text: A query in the template marketplace search is limited to 512 characters
text_ref: REQ-marketplace-template-marketplace-search-query-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-147'
  recorded_at: '2026-08-08T12:28:55.000Z'
id: FACT-marketplace-template-marketplace-search-query-max-length
type: fact
---
A query in the template marketplace search is limited to 512 characters.

Modeled from REQ-marketplace-template-marketplace-search-query-length so the claim can be checked for contradictions.
