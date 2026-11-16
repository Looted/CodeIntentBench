---
title: webhook.delivery deferred = True
status: active
fact_kind: property_value
subject_key: webhook.delivery
property_key: deferred
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AB0AFE090582E691
claim_text: Webhooks are sent in a deferred way, after the request that triggered the event
text_ref: REQ-papra-webhooks-deferred
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.8.0 changelog, #432: Webhooks invocation is now defered'
  recorded_at: '2026-11-16T13:19:59.377Z'
id: FACT-papra-webhook-delivery-deferred
type: fact
---
Webhooks are sent in a deferred way, after the request that triggered the event.

Modeled from REQ-papra-webhooks-deferred so the claim can be checked for contradictions.
