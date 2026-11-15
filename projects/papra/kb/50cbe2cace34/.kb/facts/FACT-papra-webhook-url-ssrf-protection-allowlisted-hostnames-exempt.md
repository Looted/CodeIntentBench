---
title: webhook.url_ssrf_protection allowlisted_hostnames_exempt = True
status: active
fact_kind: property_value
subject_key: webhook.url_ssrf_protection
property_key: allowlisted_hostnames_exempt
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5B0EB16EFF78D552
claim_text: unless its hostname is on the instance's explicit allow list
text_ref: REQ-papra-webhook-ssrf-protection
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): webhooks/webhooks.usecases.test.ts#webhook-ssrf-protection'
  recorded_at: '2026-11-15T23:01:25.336Z'
id: FACT-papra-webhook-url-ssrf-protection-allowlisted-hostnames-exempt
type: fact
---
Unless its hostname is on the instance's explicit allow list.

Modeled from REQ-papra-webhook-ssrf-protection so the claim can be checked for contradictions.
