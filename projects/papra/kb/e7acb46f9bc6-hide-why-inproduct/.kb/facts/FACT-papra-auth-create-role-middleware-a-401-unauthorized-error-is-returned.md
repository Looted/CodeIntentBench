---
title: auth.create_role_middleware a_401_unauthorized_error_is_returned = True
status: active
fact_kind: property_value
subject_key: auth.create_role_middleware
property_key: a_401_unauthorized_error_is_returned
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CD5559442BA48273
claim_text: When the user does not have the required permission, a 401 unauthorized error is returned
text_ref: REQ-papra-auth-401-unauthorized-error-is-returned
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-479'
  recorded_at: '2026-05-25T14:18:46.000Z'
id: FACT-papra-auth-create-role-middleware-a-401-unauthorized-error-is-returned
type: fact
---
When the user does not have the required permission, a 401 unauthorized error is returned.

Modeled from REQ-papra-auth-401-unauthorized-error-is-returned so the claim can be checked for contradictions.
