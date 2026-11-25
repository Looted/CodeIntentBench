---
title: auth.check_authentication when_the_auth_type_is_session_the_session = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_the_auth_type_is_session_the_session
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3896B947D1F062E3
claim_text: When the auth type is session, the session is required
text_ref: REQ-papra-auth-auth-type-is-session-session-is-required
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-509'
  recorded_at: '2025-07-02T09:48:20.000Z'
id: FACT-papra-auth-check-authentication-when-the-auth-type-is-session-the-session
type: fact
---
When the auth type is session, the session is required.

Modeled from REQ-papra-auth-auth-type-is-session-session-is-required so the claim can be checked for contradictions.
