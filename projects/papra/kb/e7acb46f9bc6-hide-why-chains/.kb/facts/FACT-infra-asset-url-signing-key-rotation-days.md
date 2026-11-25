---
title: infra.asset_url_signing_key rotation_days = 180
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 180
claim_key: CLAIM-EB3E83A34BD11DC6
claim_text: ASSET_URL_SIGNING_KEY is rotated every 180 days
text_ref: REQ-infra-asset-url-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-124'
  recorded_at: '2026-03-16T12:03:15.000Z'
id: FACT-infra-asset-url-signing-key-rotation-days
type: fact
---
ASSET_URL_SIGNING_KEY is rotated every 180 days.

Modeled from REQ-infra-asset-url-signing-key-rotation so the claim can be checked for contradictions.
