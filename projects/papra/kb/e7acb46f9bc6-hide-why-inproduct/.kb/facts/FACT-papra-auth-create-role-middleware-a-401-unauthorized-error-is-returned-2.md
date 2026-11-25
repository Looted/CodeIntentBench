---
title: auth.create_role_middleware a_401_unauthorized_error_is_returned_2 = True
status: active
fact_kind: property_value
subject_key: auth.create_role_middleware
property_key: a_401_unauthorized_error_is_returned_2
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F887059609559FE7
claim_text: When the user is not authenticated, a 401 unauthorized error is returned
text_ref: REQ-papra-auth-401-unauthorized-error-is-returned-2
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-484'
  recorded_at: '2026-04-11T13:59:11.000Z'
id: FACT-papra-auth-create-role-middleware-a-401-unauthorized-error-is-returned-2
type: fact
---
When the user is not authenticated, a 401 unauthorized error is returned.

Modeled from REQ-papra-auth-401-unauthorized-error-is-returned-2 so the claim can be checked for contradictions.
