---
title: website.blog_tags batch_maximum = 5
status: active
fact_kind: property_value
subject_key: website.blog_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-3173151F50431042
claim_text: At most 5 blog tags can be added or removed in one request on the marketing website
text_ref: REQ-website-blog-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-131'
  recorded_at: '2025-11-25T15:34:08.000Z'
id: FACT-website-blog-tags-batch-maximum
type: fact
---
At most 5 blog tags can be added or removed in one request on the marketing website.

Modeled from REQ-website-blog-tags-batch-size so the claim can be checked for contradictions.
