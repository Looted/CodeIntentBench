---
title: mobile.quick_labels limit_configurable = True
status: active
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2BE806DDCF7A046C
claim_text: the limit is configurable and 20 is the default
text_ref: REQ-mobile-quick-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-161'
  recorded_at: '2026-03-08T08:51:31.000Z'
id: FACT-mobile-quick-labels-limit-configurable
type: fact
---
The limit is configurable and 20 is the default.

Modeled from REQ-mobile-quick-labels-maximum-count so the claim can be checked for contradictions.
