---
title: mobile.push_relay_auth_key required_in_production = False
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5B53AA1149B34B6E
claim_text: The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set
text_ref: REQ-mobile-push-relay-auth-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-279'
  recorded_at: '2025-08-15T10:37:03.000Z'
id: FACT-mobile-push-relay-auth-key-required-in-production
type: fact
---
The mobile push relay generates a random relay authentication key at startup when PUSH_RELAY_AUTH_KEY is not set.

Modeled from REQ-mobile-push-relay-auth-key-generated-when-missing so the claim can be checked for contradictions.
