---
title: auth.check_authentication when_the_auth_type_is_api_key_the_2 = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_api_key_the_2
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2FD721607EE3E623
claim_text: When the auth type is api-key, the requiredApiKeyPermissions are required
text_ref: REQ-papra-auth-auth-type-is-api-key-requiredapikeypermissions-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-500'
  recorded_at: '2026-06-19T16:08:51.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-api-key-the-2
type: fact
---
When the auth type is api-key, the requiredApiKeyPermissions are required.

Modeled from REQ-papra-auth-auth-type-is-api-key-requiredapikeypermissions-are so the claim can be checked for contradictions.
