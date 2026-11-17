---
title: mobile.push_relay_auth_key value_logged = False
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-AC44AED7D3F62C07
claim_text: The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs
text_ref: REQ-mobile-push-relay-auth-key-never-logged
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-303'
  recorded_at: '2026-05-15T14:54:55.000Z'
id: FACT-mobile-push-relay-auth-key-value-logged
type: fact
---
The mobile push relay never writes PUSH_RELAY_AUTH_KEY or a value derived from it to its logs.

Modeled from REQ-mobile-push-relay-auth-key-never-logged so the claim can be checked for contradictions.
