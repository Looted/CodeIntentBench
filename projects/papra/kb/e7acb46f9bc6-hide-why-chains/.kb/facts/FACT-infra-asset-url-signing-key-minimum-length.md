---
title: infra.asset_url_signing_key minimum_length = 40
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-A0EC625722081CC9
claim_text: ASSET_URL_SIGNING_KEY must be at least 40 characters long
text_ref: REQ-infra-asset-url-signing-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-111'
  recorded_at: '2025-10-08T15:53:07.000Z'
id: FACT-infra-asset-url-signing-key-minimum-length
type: fact
---
ASSET_URL_SIGNING_KEY must be at least 40 characters long.

Modeled from REQ-infra-asset-url-signing-key-minimum-length so the claim can be checked for contradictions.
