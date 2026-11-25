---
title: auth.registration api_registration_when_disabled = False
status: active
fact_kind: property_value
subject_key: auth.registration
property_key: api_registration_when_disabled
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-545025D231FAE6FE
claim_text: With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations
text_ref: REQ-papra-registration-disabled-blocks-api
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1453: Fixed an issue where setting `AUTH_IS_REGISTRATION_ENABLED=f'
  recorded_at: '2026-11-16T10:25:06.310Z'
id: FACT-papra-auth-registration-api-registration-when-disabled
type: fact
---
With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations.

Modeled from REQ-papra-registration-disabled-blocks-api so the claim can be checked for contradictions.
