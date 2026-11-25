---
title: mobile.quick_labels maximum_count = 10
status: deprecated
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-D9899B4B2F22FDA4
claim_text: The number of quick labels per device in the mobile app is limited to 10
text_ref: REQ-mobile-quick-labels-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-68'
  recorded_at: '2025-08-28T09:24:00.000Z'
id: FACT-mobile-quick-labels-maximum-count-earlier
type: fact
---
The number of quick labels per device in the mobile app is limited to 10.

Modeled from REQ-mobile-quick-labels-maximum-count-earlier so the claim can be checked for contradictions.
