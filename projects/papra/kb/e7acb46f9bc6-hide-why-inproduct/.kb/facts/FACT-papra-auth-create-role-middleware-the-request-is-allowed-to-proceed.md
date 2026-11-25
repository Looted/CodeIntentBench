---
title: auth.create_role_middleware the_request_is_allowed_to_proceed = True
status: active
fact_kind: property_value
subject_key: auth.create_role_middleware
property_key: the_request_is_allowed_to_proceed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CDE182B15A71BFD0
claim_text: When the user has multiple permissions and one matches, the request is allowed to proceed
text_ref: REQ-papra-auth-request-is-allowed-to-proceed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-480'
  recorded_at: '2025-12-19T16:36:13.000Z'
id: FACT-papra-auth-create-role-middleware-the-request-is-allowed-to-proceed
type: fact
---
When the user has multiple permissions and one matches, the request is allowed to proceed.

Modeled from REQ-papra-auth-request-is-allowed-to-proceed so the claim can be checked for contradictions.
