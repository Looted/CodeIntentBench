---
title: auth.secret required_in_production = True
status: active
fact_kind: property_value
subject_key: auth.secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1391458767EE022A
claim_text: The server refuses to start in production without AUTH_SECRET
text_ref: REQ-papra-auth-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.12.0 changelog, #686: Now throw an error if AUTH_SECRET is not set in production m'
  recorded_at: '2026-11-16T10:35:53.065Z'
id: FACT-papra-auth-secret-required-in-production
type: fact
---
The server refuses to start in production without AUTH_SECRET.

Modeled from REQ-papra-auth-secret-required-in-production so the claim can be checked for contradictions.
