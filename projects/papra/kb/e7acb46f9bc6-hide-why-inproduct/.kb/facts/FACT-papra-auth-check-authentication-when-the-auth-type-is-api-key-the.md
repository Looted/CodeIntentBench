---
title: auth.check_authentication when_the_auth_type_is_api_key_the = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_api_key_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EE3CA21A989ADB1F
claim_text: When the auth type is api-key, the apiKey is required
text_ref: REQ-papra-auth-auth-type-is-api-key-apikey-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-496'
  recorded_at: '2025-10-07T14:05:19.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-api-key-the
type: fact
---
When the auth type is api-key, the apiKey is required.

Modeled from REQ-papra-auth-auth-type-is-api-key-apikey-is so the claim can be checked for contradictions.
