---
title: auth.check_authentication when_the_auth_type_is_api_key_the_3 = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_api_key_the_3
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6EB2F492D2FD76A5
claim_text: When the auth type is api-key, the session is not allowed
text_ref: REQ-papra-auth-auth-type-is-api-key-session-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-502'
  recorded_at: '2026-05-07T08:41:29.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-api-key-the-3
type: fact
---
When the auth type is api-key, the session is not allowed.

Modeled from REQ-papra-auth-auth-type-is-api-key-session-is so the claim can be checked for contradictions.
