---
title: mobile.saved_filters maximum_count = 500
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: maximum_count
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-DFB0EE1F4CE10100
claim_text: The number of saved filters per account in the mobile app is limited to 500
text_ref: REQ-mobile-saved-filters-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-142'
  recorded_at: '2026-03-06T15:07:25.000Z'
id: FACT-mobile-saved-filters-maximum-count
type: fact
---
The number of saved filters per account in the mobile app is limited to 500.

Modeled from REQ-mobile-saved-filters-maximum-count so the claim can be checked for contradictions.
