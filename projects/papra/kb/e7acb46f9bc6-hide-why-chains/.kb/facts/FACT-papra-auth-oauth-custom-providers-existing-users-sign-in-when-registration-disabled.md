---
title: auth.oauth_custom_providers existing_users_sign_in_when_registration_disabled = True
status: active
fact_kind: property_value
subject_key: auth.oauth_custom_providers
property_key: existing_users_sign_in_when_registration_disabled
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-177BE56B67A1F5F8
claim_text: existing users can still sign in with them
text_ref: REQ-papra-oauth-no-new-accounts-when-disabled
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1503: Security fix: Prevent custom OAuth providers from creating n'
  recorded_at: '2026-11-16T13:22:19.412Z'
id: FACT-papra-auth-oauth-custom-providers-existing-users-sign-in-when-registration-disabled
type: fact
---
Existing users can still sign in with them.

Modeled from REQ-papra-oauth-no-new-accounts-when-disabled so the claim can be checked for contradictions.
