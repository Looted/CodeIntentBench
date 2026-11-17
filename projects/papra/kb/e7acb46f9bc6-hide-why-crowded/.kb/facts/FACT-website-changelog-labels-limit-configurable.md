---
title: website.changelog_labels limit_configurable = True
status: active
fact_kind: property_value
subject_key: website.changelog_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2BE806DDCF7A046C
claim_text: the limit is configurable and 20 is the default
text_ref: REQ-website-changelog-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-171'
  recorded_at: '2026-09-23T15:40:30.000Z'
id: FACT-website-changelog-labels-limit-configurable
type: fact
---
The limit is configurable and 20 is the default.

Modeled from REQ-website-changelog-labels-maximum-count so the claim can be checked for contradictions.
