---
title: mobile.saved_filters limit_configurable = False
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-mobile-saved-filters-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-142'
  recorded_at: '2026-03-06T15:07:25.000Z'
id: FACT-mobile-saved-filters-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-mobile-saved-filters-maximum-count so the claim can be checked for contradictions.
