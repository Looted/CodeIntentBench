---
title: infra.asset_url_signing_key example_value_refused = True
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CEE55219A7791C16
claim_text: The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment
text_ref: REQ-infra-asset-url-signing-key-example-value-refused
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-116'
  recorded_at: '2025-09-12T09:14:31.000Z'
id: FACT-infra-asset-url-signing-key-example-value-refused
type: fact
---
The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment.

Modeled from REQ-infra-asset-url-signing-key-example-value-refused so the claim can be checked for contradictions.
