---
title: webhook.secret required = False
status: active
fact_kind: property_value
subject_key: webhook.secret
property_key: required
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-6F6C64F6E8F4F24F
claim_text: A webhook can be created without a secret
text_ref: REQ-papra-webhooks-without-secret
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.2 changelog, #585: Fix webhook creation form preventing to create webhooks with'
  recorded_at: '2026-11-16T10:33:58.562Z'
id: FACT-papra-webhook-secret-required
type: fact
---
A webhook can be created without a secret.

Modeled from REQ-papra-webhooks-without-secret so the claim can be checked for contradictions.
