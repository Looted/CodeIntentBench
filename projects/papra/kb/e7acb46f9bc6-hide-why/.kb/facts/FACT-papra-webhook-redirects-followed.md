---
title: webhook.redirects followed = False
status: active
fact_kind: property_value
subject_key: webhook.redirects
property_key: followed
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-A864882014B714E6
claim_text: Webhook requests do not follow HTTP redirects (3xx responses)
text_ref: REQ-papra-webhooks-no-redirects
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1099: Webhooks no longer follow http redirects (3xx responses) whe'
  recorded_at: '2026-11-16T13:20:17.392Z'
id: FACT-papra-webhook-redirects-followed
type: fact
---
Webhook requests do not follow HTTP redirects (3xx responses).

Modeled from REQ-papra-webhooks-no-redirects so the claim can be checked for contradictions.
