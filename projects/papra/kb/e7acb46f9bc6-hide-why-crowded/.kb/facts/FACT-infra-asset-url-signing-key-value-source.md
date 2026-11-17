---
title: infra.asset_url_signing_key value_source = environment only
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-EEF5B33262645C66
claim_text: The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file
text_ref: REQ-infra-asset-url-signing-key-source
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-132'
  recorded_at: '2025-06-28T17:37:13.000Z'
id: FACT-infra-asset-url-signing-key-value-source
type: fact
---
The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file.

Modeled from REQ-infra-asset-url-signing-key-source so the claim can be checked for contradictions.
