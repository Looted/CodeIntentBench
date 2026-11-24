---
title: intake_email.webhook_secret length_range_when_set = 16_to_128_characters
status: active
fact_kind: property_value
subject_key: intake_email.webhook_secret
property_key: length_range_when_set
operator: eq
value_type: string
value_string: 16_to_128_characters
claim_key: CLAIM-9906EDF4469B7387
claim_text: a secret that is set must be between 16 and 128 characters
text_ref: REQ-papra-intake-webhook-secret-required
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1502'
  recorded_at: '2026-11-16T10:29:11.115Z'
id: FACT-papra-intake-email-webhook-secret-length-range-when-set
type: fact
---
A secret that is set must be between 16 and 128 characters.

Modeled from REQ-papra-intake-webhook-secret-required so the claim can be checked for contradictions.
