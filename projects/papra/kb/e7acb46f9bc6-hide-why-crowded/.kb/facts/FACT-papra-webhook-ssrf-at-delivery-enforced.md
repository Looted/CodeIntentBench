---
title: webhook.ssrf_at_delivery enforced = True
status: active
fact_kind: property_value
subject_key: webhook.ssrf_at_delivery
property_key: enforced
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0C829AB10B1DABB1
claim_text: The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved
text_ref: REQ-papra-webhook-ssrf-at-delivery
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1099: Webhooks ssrf validation is now enforced when sending webhoo'
  recorded_at: '2026-11-16T13:20:20.495Z'
id: FACT-papra-webhook-ssrf-at-delivery-enforced
type: fact
---
The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved.

Modeled from REQ-papra-webhook-ssrf-at-delivery so the claim can be checked for contradictions.
