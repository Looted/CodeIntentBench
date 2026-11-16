---
title: auth.register_link shown_when_registration_disabled = False
status: active
fact_kind: property_value
subject_key: auth.register_link
property_key: shown_when_registration_disabled
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4E69E51BFF6F7CB4
claim_text: The login page hides the Register link when registration is disabled
text_ref: REQ-papra-register-link-hidden
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #795: Hide the "Don''t have an account? Register" link on the login'
  recorded_at: '2026-11-16T10:24:50.402Z'
id: FACT-papra-auth-register-link-shown-when-registration-disabled
type: fact
---
The login page hides the Register link when registration is disabled.

Modeled from REQ-papra-register-link-hidden so the claim can be checked for contradictions.
