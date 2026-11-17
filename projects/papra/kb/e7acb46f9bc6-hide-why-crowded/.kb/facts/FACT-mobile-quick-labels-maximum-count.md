---
title: mobile.quick_labels maximum_count = 20
status: active
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-F286C188F573F3B0
claim_text: The number of quick labels per device in the mobile app is limited to 20
text_ref: REQ-mobile-quick-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-161'
  recorded_at: '2026-03-08T08:51:31.000Z'
id: FACT-mobile-quick-labels-maximum-count
type: fact
---
The number of quick labels per device in the mobile app is limited to 20.

Modeled from REQ-mobile-quick-labels-maximum-count so the claim can be checked for contradictions.
