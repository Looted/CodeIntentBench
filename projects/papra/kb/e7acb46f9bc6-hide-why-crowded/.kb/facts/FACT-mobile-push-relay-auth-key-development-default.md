---
title: mobile.push_relay_auth_key development_default = fixed development value
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-FE03A65728390152
claim_text: The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set
text_ref: REQ-mobile-push-relay-auth-key-development-default
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-311'
  recorded_at: '2026-04-16T17:22:13.000Z'
id: FACT-mobile-push-relay-auth-key-development-default
type: fact
---
The mobile push relay uses a fixed development value outside production when PUSH_RELAY_AUTH_KEY is not set.

Modeled from REQ-mobile-push-relay-auth-key-development-default so the claim can be checked for contradictions.
