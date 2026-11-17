---
title: Stripe webhook verification
status: active
fact_kind: subject
subject_key: billing.stripe_webhook
canonical_key: billing.stripe_webhook
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs: app 26.6.2 (#1432)'
  recorded_at: '2026-11-16T13:21:52.366Z'
id: FACT-papra-subject-billing-stripe-webhook
type: fact
---
The endpoint that receives Stripe billing events for subscriptions, and how it checks that an event really comes from Stripe.