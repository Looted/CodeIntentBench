---
title: mobile.push_relay_auth_key rotation_days = 30
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-FC4E4BF60B838CCB
claim_text: PUSH_RELAY_AUTH_KEY is rotated every 30 days
text_ref: REQ-mobile-push-relay-auth-key-rotation
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-292'
  recorded_at: '2025-06-26T13:36:03.000Z'
id: FACT-mobile-push-relay-auth-key-rotation-days
type: fact
---
PUSH_RELAY_AUTH_KEY is rotated every 30 days.

Modeled from REQ-mobile-push-relay-auth-key-rotation so the claim can be checked for contradictions.
