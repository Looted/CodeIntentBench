---
title: api_keys.custom_property_permissions available = True
status: active
fact_kind: property_value
subject_key: api_keys.custom_property_permissions
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5921E0637A0D9001
claim_text: API keys have permissions for managing custom properties
text_ref: REQ-papra-api-key-custom-property-permissions
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1135: Added api-key permissions for managing custom properties'
  recorded_at: '2026-11-16T10:36:27.081Z'
id: FACT-papra-api-keys-custom-property-permissions-available
type: fact
---
API keys have permissions for managing custom properties.

Modeled from REQ-papra-api-key-custom-property-permissions so the claim can be checked for contradictions.
