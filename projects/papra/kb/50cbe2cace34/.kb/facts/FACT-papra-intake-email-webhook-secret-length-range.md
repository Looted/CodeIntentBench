---
title: intake_email.webhook_secret length_range = 16_to_128_characters
status: deprecated
fact_kind: property_value
subject_key: intake_email.webhook_secret
property_key: length_range
operator: eq
value_type: string
value_string: 16_to_128_characters
claim_key: CLAIM-53856D3A9238D02B
claim_text: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters
text_ref: REQ-papra-intake-webhook-secret-length
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #892'
  recorded_at: '2026-11-16T10:29:05.799Z'
id: FACT-papra-intake-email-webhook-secret-length-range
type: fact
---
The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters.

Modeled from REQ-papra-intake-webhook-secret-length so the claim can be checked for contradictions.
