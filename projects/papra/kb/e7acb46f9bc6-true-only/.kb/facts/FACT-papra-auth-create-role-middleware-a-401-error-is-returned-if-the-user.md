---
title: auth.create_role_middleware a_401_error_is_returned_if_the_user = True
status: active
fact_kind: property_value
subject_key: auth.create_role_middleware
property_key: a_401_error_is_returned_if_the_user
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3042E417958987FF
claim_text: When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions
text_ref: REQ-papra-auth-401-error-is-returned-if-user-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-474'
  recorded_at: '2026-02-28T08:35:57.000Z'
id: FACT-papra-auth-create-role-middleware-a-401-error-is-returned-if-the-user
type: fact
---
When multiple permissions are required, a 401 error is returned if the user is missing one of the required permissions.

Modeled from REQ-papra-auth-401-error-is-returned-if-user-is so the claim can be checked for contradictions.
