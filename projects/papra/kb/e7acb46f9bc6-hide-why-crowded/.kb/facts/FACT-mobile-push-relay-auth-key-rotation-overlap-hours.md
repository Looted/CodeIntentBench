---
title: mobile.push_relay_auth_key rotation_overlap_hours = 1
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-BD83FC4FB2DF2432
claim_text: the previous value stays valid for 1 hours after a rotation
text_ref: REQ-mobile-push-relay-auth-key-rotation
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-292'
  recorded_at: '2025-06-26T13:36:03.000Z'
id: FACT-mobile-push-relay-auth-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 1 hours after a rotation.

Modeled from REQ-mobile-push-relay-auth-key-rotation so the claim can be checked for contradictions.
