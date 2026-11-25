---
title: website.blog_categories batch_maximum = 20
status: active
fact_kind: property_value
subject_key: website.blog_categories
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-592D41E21ED0945A
claim_text: At most 20 blog categories can be added or removed in one request on the marketing website
text_ref: REQ-website-blog-categories-batch-size
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-166'
  recorded_at: '2026-08-22T10:18:44.000Z'
id: FACT-website-blog-categories-batch-maximum
type: fact
---
At most 20 blog categories can be added or removed in one request on the marketing website.

Modeled from REQ-website-blog-categories-batch-size so the claim can be checked for contradictions.
