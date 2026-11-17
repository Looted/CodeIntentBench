---
title: intake_email.webhook_secret default_value = none
status: active
fact_kind: property_value
subject_key: intake_email.webhook_secret
property_key: default_value
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-40FEF5948ABB53B3
claim_text: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value
text_ref: REQ-papra-intake-webhook-secret-required
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1502'
  recorded_at: '2026-11-16T13:14:44.246Z'
id: FACT-papra-intake-email-webhook-secret-default-value
type: fact
---
The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value.

Modeled from REQ-papra-intake-webhook-secret-required so the claim can be checked for contradictions.
