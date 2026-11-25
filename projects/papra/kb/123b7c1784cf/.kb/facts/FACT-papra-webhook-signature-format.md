---
title: webhook.signature format = standard_webhooks
status: active
fact_kind: property_value
subject_key: webhook.signature
property_key: format
operator: eq
value_type: string
value_string: standard_webhooks
claim_key: CLAIM-56CBC73D7975EDED
claim_text: Webhook signatures and payloads follow the standard-webhooks specification
text_ref: REQ-papra-webhooks-standard-webhooks-spec
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): webhooks 0.2.0 changelog, #430: Breaking change: updated webhooks signatures and payload for'
  recorded_at: '2026-11-25T19:29:16.890Z'
id: FACT-papra-webhook-signature-format
type: fact
---
Webhook signatures and payloads follow the standard-webhooks specification.

Modeled from REQ-papra-webhooks-standard-webhooks-spec so the claim can be checked for contradictions.
