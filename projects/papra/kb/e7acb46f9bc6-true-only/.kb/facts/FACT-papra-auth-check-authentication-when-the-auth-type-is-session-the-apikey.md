---
title: auth.check_authentication when_the_auth_type_is_session_the_apikey = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_session_the_apikey
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5AC98A1A89E1A10C
claim_text: When the auth type is session, the apiKey is not allowed
text_ref: REQ-papra-auth-auth-type-is-session-apikey-is-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-508'
  recorded_at: '2025-09-11T15:14:17.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-session-the-apikey
type: fact
---
When the auth type is session, the apiKey is not allowed.

Modeled from REQ-papra-auth-auth-type-is-session-apikey-is-not so the claim can be checked for contradictions.
