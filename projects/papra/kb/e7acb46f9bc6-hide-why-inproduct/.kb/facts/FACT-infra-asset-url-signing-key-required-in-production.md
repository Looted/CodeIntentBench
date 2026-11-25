---
title: infra.asset_url_signing_key required_in_production = False
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-D2C648D3003DC4A6
claim_text: The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set
text_ref: REQ-infra-asset-url-signing-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-103'
  recorded_at: '2025-10-24T14:33:51.000Z'
id: FACT-infra-asset-url-signing-key-required-in-production
type: fact
---
The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set.

Modeled from REQ-infra-asset-url-signing-key-generated-when-missing so the claim can be checked for contradictions.
