---
title: webhook.fields secret_max_characters = 256
status: active
fact_kind: property_value
subject_key: webhook.fields
property_key: secret_max_characters
operator: eq
value_type: int
value_int: 256
claim_key: CLAIM-27498F70FDA95213
claim_text: webhook secrets are limited to 256 characters
text_ref: REQ-papra-webhook-field-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1020: Added some size limits on the webhooks creation and update A'
  recorded_at: '2026-11-16T13:20:13.550Z'
id: FACT-papra-webhook-fields-secret-max-characters
type: fact
---
Webhook secrets are limited to 256 characters.

Modeled from REQ-papra-webhook-field-size-limits so the claim can be checked for contradictions.
