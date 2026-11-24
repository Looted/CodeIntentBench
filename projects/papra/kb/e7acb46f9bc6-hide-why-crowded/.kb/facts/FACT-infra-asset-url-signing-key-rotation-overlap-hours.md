---
title: infra.asset_url_signing_key rotation_overlap_hours = 24
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A45280A30BC5D577
claim_text: the previous value stays valid for 24 hours after a rotation
text_ref: REQ-infra-asset-url-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-124'
  recorded_at: '2026-03-16T12:03:15.000Z'
id: FACT-infra-asset-url-signing-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 24 hours after a rotation.

Modeled from REQ-infra-asset-url-signing-key-rotation so the claim can be checked for contradictions.
