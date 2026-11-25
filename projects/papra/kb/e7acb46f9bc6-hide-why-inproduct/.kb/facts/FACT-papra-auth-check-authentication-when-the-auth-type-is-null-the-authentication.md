---
title: auth.check_authentication when_the_auth_type_is_null_the_authentication = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_null_the_authentication
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EF0EECE51E56AE57
claim_text: When the auth type is null, the authentication is invalid
text_ref: REQ-papra-auth-auth-type-is-null-authentication-is-invalid
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-506'
  recorded_at: '2025-10-25T09:42:19.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-null-the-authentication
type: fact
---
When the auth type is null, the authentication is invalid.

Modeled from REQ-papra-auth-auth-type-is-null-authentication-is-invalid so the claim can be checked for contradictions.
