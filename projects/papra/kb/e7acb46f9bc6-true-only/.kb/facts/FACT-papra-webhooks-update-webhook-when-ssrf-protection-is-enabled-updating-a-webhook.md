---
title: webhooks.update_webhook when_ssrf_protection_is_enabled_updating_a_webhook = True
status: active
fact_kind: property_value
subject_key: webhooks.update_webhook
property_key: when_ssrf_protection_is_enabled_updating_a_webhook
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F83F78FBBFB5438A
claim_text: When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url
text_ref: REQ-papra-webhooks-ssrf-protection-is-enabled-updating-webhook-with
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1885'
  recorded_at: '2026-03-18T13:13:32.000Z'
id: FACT-papra-webhooks-update-webhook-when-ssrf-protection-is-enabled-updating-a-webhook
type: fact
---
When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url.

Modeled from REQ-papra-webhooks-ssrf-protection-is-enabled-updating-webhook-with so the claim can be checked for contradictions.
