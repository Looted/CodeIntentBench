---
title: marketplace.template_marketplace_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: marketplace.template_marketplace_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-marketplace-template-marketplace-search-query-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-147'
  recorded_at: '2026-08-08T12:28:55.000Z'
id: FACT-marketplace-template-marketplace-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-marketplace-template-marketplace-search-query-length so the claim can be checked for contradictions.
