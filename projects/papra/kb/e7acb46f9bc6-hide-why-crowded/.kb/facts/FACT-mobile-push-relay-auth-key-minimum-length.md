---
title: mobile.push_relay_auth_key minimum_length = 24
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A9CDB460CDF22D20
claim_text: PUSH_RELAY_AUTH_KEY must be at least 24 characters long
text_ref: REQ-mobile-push-relay-auth-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-282'
  recorded_at: '2025-04-21T15:12:19.000Z'
id: FACT-mobile-push-relay-auth-key-minimum-length
type: fact
---
PUSH_RELAY_AUTH_KEY must be at least 24 characters long.

Modeled from REQ-mobile-push-relay-auth-key-minimum-length so the claim can be checked for contradictions.
