---
title: mobile.saved_filters batch_maximum = 5
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-E030789A9A68955A
claim_text: At most 5 saved filters can be added or removed in one request in the mobile app
text_ref: REQ-mobile-saved-filters-batch-size
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-153'
  recorded_at: '2026-01-24T12:33:19.000Z'
id: FACT-mobile-saved-filters-batch-maximum
type: fact
---
At most 5 saved filters can be added or removed in one request in the mobile app.

Modeled from REQ-mobile-saved-filters-batch-size so the claim can be checked for contradictions.
