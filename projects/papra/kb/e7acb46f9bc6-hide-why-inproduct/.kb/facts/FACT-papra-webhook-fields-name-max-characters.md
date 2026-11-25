---
title: webhook.fields name_max_characters = 128
status: active
fact_kind: property_value
subject_key: webhook.fields
property_key: name_max_characters
operator: eq
value_type: int
value_int: 128
claim_key: CLAIM-754B5B691B362CA7
claim_text: Webhook names are limited to 128 characters
text_ref: REQ-papra-webhook-field-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1020: Added some size limits on the webhooks creation and update A'
  recorded_at: '2026-11-16T13:20:12.808Z'
id: FACT-papra-webhook-fields-name-max-characters
type: fact
---
Webhook names are limited to 128 characters.

Modeled from REQ-papra-webhook-field-size-limits so the claim can be checked for contradictions.
