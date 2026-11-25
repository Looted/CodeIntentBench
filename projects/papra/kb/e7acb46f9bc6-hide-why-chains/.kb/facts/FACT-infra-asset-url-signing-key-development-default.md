---
title: infra.asset_url_signing_key development_default = always required
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-2F345FA6C36B9EC9
claim_text: The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included
text_ref: REQ-infra-asset-url-signing-key-development-default
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-139'
  recorded_at: '2026-07-21T14:32:41.000Z'
id: FACT-infra-asset-url-signing-key-development-default
type: fact
---
The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included.

Modeled from REQ-infra-asset-url-signing-key-development-default so the claim can be checked for contradictions.
