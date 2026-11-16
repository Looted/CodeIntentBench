---
title: Stripe webhooks are rejected when no Stripe webhook secret is configured.
status: active
semantic_text: Stripe webhooks are rejected when no Stripe webhook secret is configured.
semantic_clauses:
  - Stripe webhooks are rejected when no Stripe webhook secret is configured
logic_claims:
  - CLAIM-E98030B6C8D1D44E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a65137b3f4bb5cf012512f879c98bbc3ff1b2b73ed4814fecf7a48b46054dd4
semantic_inventory:
  - claim_key: CLAIM-E98030B6C8D1D44E
    claim_text: Stripe webhooks are rejected when no Stripe webhook secret is configured
    role: normative
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - billing.stripe_webhook
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1432: Prevent stripe webhook forgery for apps with unconfigured we'
  recorded_at: '2026-11-16T10:35:38.965Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:billing
id: REQ-papra-stripe-webhook-forgery-prevented
type: req
---
Stripe webhooks are rejected when no Stripe webhook secret is configured.

## Context

Reason not stated.

## Source

> Prevent stripe webhook forgery for apps with unconfigured webhooks secrets. Thank you to [Andrew Gonzalez](https://www.linkedin.com/in/andrew-gonzalez-6b8b68257/) ([@bruhdev1290](https://github.com/bruhdev1290)) for the responsible disclosure of this issue.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.2 changelog, #1432: Prevent stripe webhook forgery for apps with unconfigured we
