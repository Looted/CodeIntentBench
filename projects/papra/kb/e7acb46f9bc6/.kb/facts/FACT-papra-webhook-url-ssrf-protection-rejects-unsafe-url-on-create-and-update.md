---
title: webhook.url_ssrf_protection rejects_unsafe_url_on_create_and_update = True
status: active
fact_kind: property_value
subject_key: webhook.url_ssrf_protection
property_key: rejects_unsafe_url_on_create_and_update
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0C1F5BD74963BC3A
claim_text: When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update
text_ref: REQ-papra-webhook-ssrf-protection
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): webhooks/webhooks.usecases.test.ts#webhook-ssrf-protection'
  recorded_at: '2026-11-15T22:58:30.033Z'
id: FACT-papra-webhook-url-ssrf-protection-rejects-unsafe-url-on-create-and-update
type: fact
---
When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update.

Modeled from REQ-papra-webhook-ssrf-protection so the claim can be checked for contradictions.
