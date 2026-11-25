---
title: telemetry.telemetry_ingest_token rotation_overlap_hours = 24
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A45280A30BC5D577
claim_text: the previous value stays valid for 24 hours after a rotation
text_ref: REQ-telemetry-telemetry-ingest-token-rotation
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-184'
  recorded_at: '2025-06-22T08:48:38.000Z'
id: FACT-telemetry-telemetry-ingest-token-rotation-overlap-hours
type: fact
---
The previous value stays valid for 24 hours after a rotation.

Modeled from REQ-telemetry-telemetry-ingest-token-rotation so the claim can be checked for contradictions.
