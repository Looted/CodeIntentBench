---
title: auth.secret min_length = 32
status: active
fact_kind: property_value
subject_key: auth.secret
property_key: min_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-75CF6C260FE36E6A
claim_text: AUTH_SECRET must be at least 32 characters
text_ref: REQ-papra-auth-secret-min-32
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.12.0 changelog, #686: Enforcing the auth secret to be at least 32 characters long'
  recorded_at: '2026-11-16T10:24:56.699Z'
id: FACT-papra-auth-secret-min-length
type: fact
---
AUTH_SECRET must be at least 32 characters.

Modeled from REQ-papra-auth-secret-min-32 so the claim can be checked for contradictions.
