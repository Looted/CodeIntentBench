---
title: auth.create_role_middleware the_request_is_allowed_if_the_user_has = True
status: active
fact_kind: property_value
subject_key: auth.create_role_middleware
property_key: the_request_is_allowed_if_the_user_has
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0FE75869FEF0B71A
claim_text: When multiple permissions are required, the request is allowed if the user has all required permissions
text_ref: REQ-papra-auth-request-is-allowed-if-user-has-all
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-477'
  recorded_at: '2026-06-21T13:04:08.000Z'
id: FACT-papra-auth-create-role-middleware-the-request-is-allowed-if-the-user-has
type: fact
---
When multiple permissions are required, the request is allowed if the user has all required permissions.

Modeled from REQ-papra-auth-request-is-allowed-if-user-has-all so the claim can be checked for contradictions.
