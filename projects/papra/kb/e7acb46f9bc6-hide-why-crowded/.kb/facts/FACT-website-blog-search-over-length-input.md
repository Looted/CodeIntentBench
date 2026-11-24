---
title: website.blog_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: website.blog_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-website-blog-search-query-length
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-216'
  recorded_at: '2025-11-18T14:57:37.000Z'
id: FACT-website-blog-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-website-blog-search-query-length so the claim can be checked for contradictions.
