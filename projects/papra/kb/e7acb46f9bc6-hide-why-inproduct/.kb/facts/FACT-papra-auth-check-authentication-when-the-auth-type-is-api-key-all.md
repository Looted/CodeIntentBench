---
title: auth.check_authentication when_the_auth_type_is_api_key_all = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_api_key_all
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8A3AD0D6653B3C18
claim_text: When the auth type is api-key, all permissions must match
text_ref: REQ-papra-auth-auth-type-is-api-key-all-permissions
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-495'
  recorded_at: '2025-12-18T10:31:01.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-api-key-all
type: fact
---
When the auth type is api-key, all permissions must match.

Modeled from REQ-papra-auth-auth-type-is-api-key-all-permissions so the claim can be checked for contradictions.
