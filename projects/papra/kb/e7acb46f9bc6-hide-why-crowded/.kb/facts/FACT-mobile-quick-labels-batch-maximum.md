---
title: mobile.quick_labels batch_maximum = 25
status: active
fact_kind: property_value
subject_key: mobile.quick_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-E4FBC17AD105B27B
claim_text: At most 25 quick labels can be added or removed in one request in the mobile app
text_ref: REQ-mobile-quick-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-178'
  recorded_at: '2025-10-21T16:14:36.000Z'
id: FACT-mobile-quick-labels-batch-maximum
type: fact
---
At most 25 quick labels can be added or removed in one request in the mobile app.

Modeled from REQ-mobile-quick-labels-batch-size so the claim can be checked for contradictions.
