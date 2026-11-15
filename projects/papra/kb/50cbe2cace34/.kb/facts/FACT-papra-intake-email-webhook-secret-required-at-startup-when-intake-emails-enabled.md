---
title: intake_email.webhook_secret required_at_startup_when_intake_emails_enabled = True
status: active
fact_kind: property_value
subject_key: intake_email.webhook_secret
property_key: required_at_startup_when_intake_emails_enabled
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-600217F4D2875452
claim_text: when intake emails are enabled the server refuses to start without it
text_ref: REQ-papra-intake-webhook-secret-required
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1502'
  recorded_at: '2026-11-15T22:59:52.510Z'
id: FACT-papra-intake-email-webhook-secret-required-at-startup-when-intake-emails-enabled
type: fact
---
When intake emails are enabled the server refuses to start without it.

Modeled from REQ-papra-intake-webhook-secret-required so the claim can be checked for contradictions.
