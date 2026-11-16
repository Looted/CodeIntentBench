---
title: webhook.fields url_max_characters = 2048
status: active
fact_kind: property_value
subject_key: webhook.fields
property_key: url_max_characters
operator: eq
value_type: int
value_int: 2048
claim_key: CLAIM-2B5EFE243BD0AA36
claim_text: webhook URLs are limited to 2048 characters
text_ref: REQ-papra-webhook-field-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1020: Added some size limits on the webhooks creation and update A'
  recorded_at: '2026-11-16T10:34:02.959Z'
id: FACT-papra-webhook-fields-url-max-characters
type: fact
---
Webhook URLs are limited to 2048 characters.

Modeled from REQ-papra-webhook-field-size-limits so the claim can be checked for contradictions.
