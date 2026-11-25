---
title: webhooks.create_webhook when_ssrf_protection_is_enabled_creating_a_webhook = True
status: active
fact_kind: property_value
subject_key: webhooks.create_webhook
property_key: when_ssrf_protection_is_enabled_creating_a_webhook
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8374B8D563763392
claim_text: When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url
text_ref: REQ-papra-webhooks-ssrf-protection-is-enabled-creating-webhook-with
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1884'
  recorded_at: '2026-03-25T13:21:37.000Z'
id: FACT-papra-webhooks-create-webhook-when-ssrf-protection-is-enabled-creating-a-webhook
type: fact
---
When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url.

Modeled from REQ-papra-webhooks-ssrf-protection-is-enabled-creating-webhook-with so the claim can be checked for contradictions.
