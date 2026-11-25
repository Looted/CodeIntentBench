---
title: mobile.pinned_organizations maximum_count = 100
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-E9564AD78FCE823F
claim_text: A device can have at most 100 pinned organizations in the mobile app
text_ref: REQ-mobile-pinned-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-234'
  recorded_at: '2025-05-07T10:24:09.000Z'
id: FACT-mobile-pinned-organizations-maximum-count
type: fact
---
A device can have at most 100 pinned organizations in the mobile app.

Modeled from REQ-mobile-pinned-organizations-maximum-count so the claim can be checked for contradictions.
