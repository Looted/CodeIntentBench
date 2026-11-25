---
title: auth.check_authentication when_both_the_apikey_and_the_session_are = True
status: active
fact_kind: property_value
subject_key: auth.check_authentication
property_key: when_both_the_apikey_and_the_session_are
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-487FF60304E624E4
claim_text: When both the apiKey and the session are provided, the authentication is invalid
text_ref: REQ-papra-auth-both-apikey-and-session-are-provided-authentication
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-494'
  recorded_at: '2026-03-28T08:49:08.000Z'
id: FACT-papra-auth-check-authentication-when-both-the-apikey-and-the-session-are
type: fact
---
When both the apiKey and the session are provided, the authentication is invalid.

Modeled from REQ-papra-auth-both-apikey-and-session-are-provided-authentication so the claim can be checked for contradictions.
