---
title: mobile.pinned_organizations name_max_length = 50
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-3A117063A41F2303
claim_text: Pinned organization names in the mobile app are between 3 and 50 characters long
text_ref: REQ-mobile-pinned-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-262'
  recorded_at: '2025-06-11T15:24:09.000Z'
id: FACT-mobile-pinned-organizations-name-max-length
type: fact
---
Pinned organization names in the mobile app are between 3 and 50 characters long.

Modeled from REQ-mobile-pinned-organizations-name-length so the claim can be checked for contradictions.
