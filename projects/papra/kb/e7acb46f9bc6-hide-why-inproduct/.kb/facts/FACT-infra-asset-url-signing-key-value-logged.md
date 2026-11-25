---
title: infra.asset_url_signing_key value_logged = False
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3FB46F6A400F3579
claim_text: The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs
text_ref: REQ-infra-asset-url-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-134'
  recorded_at: '2025-11-10T16:05:19.000Z'
id: FACT-infra-asset-url-signing-key-value-logged
type: fact
---
The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs.

Modeled from REQ-infra-asset-url-signing-key-never-logged so the claim can be checked for contradictions.
