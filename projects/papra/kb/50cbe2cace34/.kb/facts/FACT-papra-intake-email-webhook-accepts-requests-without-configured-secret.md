---
title: intake_email.webhook accepts_requests_without_configured_secret = False
status: active
fact_kind: property_value
subject_key: intake_email.webhook
property_key: accepts_requests_without_configured_secret
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-E81359F6D0AD5403
claim_text: the ingest endpoint rejects a request when no secret is configured
text_ref: REQ-papra-intake-webhook-secret-required
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1502'
  recorded_at: '2026-11-15T22:59:53.803Z'
id: FACT-papra-intake-email-webhook-accepts-requests-without-configured-secret
type: fact
---
The ingest endpoint rejects a request when no secret is configured.

Modeled from REQ-papra-intake-webhook-secret-required so the claim can be checked for contradictions.
