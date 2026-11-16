---
title: auth.password_reset revokes_sessions = True
status: active
fact_kind: property_value
subject_key: auth.password_reset
property_key: revokes_sessions
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C96B0C216066BFFA
claim_text: Resetting a password revokes all of the user's sessions
text_ref: REQ-papra-password-reset-revokes-sessions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1406: Security fix: revoke all user sessions on password reset. Th'
  recorded_at: '2026-11-16T10:35:56.146Z'
id: FACT-papra-auth-password-reset-revokes-sessions
type: fact
---
Resetting a password revokes all of the user's sessions.

Modeled from REQ-papra-password-reset-revokes-sessions so the claim can be checked for contradictions.
