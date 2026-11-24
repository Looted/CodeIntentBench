---
title: mobile.push_relay_auth_key value_source = environment only
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-AEC2C5FA2602BC31
claim_text: The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file
text_ref: REQ-mobile-push-relay-auth-key-source
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-300'
  recorded_at: '2025-05-06T12:06:42.000Z'
id: FACT-mobile-push-relay-auth-key-value-source
type: fact
---
The mobile push relay reads PUSH_RELAY_AUTH_KEY from the environment only, never from a configuration file.

Modeled from REQ-mobile-push-relay-auth-key-source so the claim can be checked for contradictions.
