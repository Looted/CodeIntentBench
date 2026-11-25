---
title: website.changelog_labels batch_maximum = 25
status: active
fact_kind: property_value
subject_key: website.changelog_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-2E643936A6532271
claim_text: At most 25 changelog labels can be added or removed in one request on the marketing website
text_ref: REQ-website-changelog-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-189'
  recorded_at: '2025-09-23T08:43:31.000Z'
id: FACT-website-changelog-labels-batch-maximum
type: fact
---
At most 25 changelog labels can be added or removed in one request on the marketing website.

Modeled from REQ-website-changelog-labels-batch-size so the claim can be checked for contradictions.
