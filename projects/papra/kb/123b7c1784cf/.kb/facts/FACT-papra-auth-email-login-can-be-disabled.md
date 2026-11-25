---
title: auth.email_login can_be_disabled = True
status: active
fact_kind: property_value
subject_key: auth.email_login
property_key: can_be_disabled
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E872A0DB0B72A4DC
claim_text: Email and password login can be disabled
text_ref: REQ-papra-email-login-can-be-disabled
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.4 changelog, #394: Added the possibility to disable login via email, to support'
  recorded_at: '2026-11-25T19:30:43.052Z'
id: FACT-papra-auth-email-login-can-be-disabled
type: fact
---
Email and password login can be disabled.

Modeled from REQ-papra-email-login-can-be-disabled so the claim can be checked for contradictions.
