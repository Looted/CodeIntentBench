---
title: billing.stripe_webhook accepted_without_secret = False
status: active
fact_kind: property_value
subject_key: billing.stripe_webhook
property_key: accepted_without_secret
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-E98030B6C8D1D44E
claim_text: Stripe webhooks are rejected when no Stripe webhook secret is configured
text_ref: REQ-papra-stripe-webhook-forgery-prevented
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1432: Prevent stripe webhook forgery for apps with unconfigured we'
  recorded_at: '2026-11-16T10:35:38.070Z'
id: FACT-papra-billing-stripe-webhook-accepted-without-secret
type: fact
---
Stripe webhooks are rejected when no Stripe webhook secret is configured.

Modeled from REQ-papra-stripe-webhook-forgery-prevented so the claim can be checked for contradictions.
