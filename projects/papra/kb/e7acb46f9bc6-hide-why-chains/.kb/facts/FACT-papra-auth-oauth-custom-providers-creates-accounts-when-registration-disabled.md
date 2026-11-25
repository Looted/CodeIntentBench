---
title: auth.oauth_custom_providers creates_accounts_when_registration_disabled = False
status: active
fact_kind: property_value
subject_key: auth.oauth_custom_providers
property_key: creates_accounts_when_registration_disabled
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5C5B6058100121C0
claim_text: When registration is disabled, custom OAuth providers do not create new accounts
text_ref: REQ-papra-oauth-no-new-accounts-when-disabled
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1503: Security fix: Prevent custom OAuth providers from creating n'
  recorded_at: '2026-11-16T13:22:18.703Z'
id: FACT-papra-auth-oauth-custom-providers-creates-accounts-when-registration-disabled
type: fact
---
When registration is disabled, custom OAuth providers do not create new accounts.

Modeled from REQ-papra-oauth-no-new-accounts-when-disabled so the claim can be checked for contradictions.
