---
title: telemetry.telemetry_ingest_token rotation_days = 60
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: rotation_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-DBBEFA6CD5EA363D
claim_text: TELEMETRY_INGEST_TOKEN is rotated every 60 days
text_ref: REQ-telemetry-telemetry-ingest-token-rotation
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-247'
  recorded_at: '2025-06-22T08:48:38.000Z'
id: FACT-telemetry-telemetry-ingest-token-rotation-days
type: fact
---
TELEMETRY_INGEST_TOKEN is rotated every 60 days.

Modeled from REQ-telemetry-telemetry-ingest-token-rotation so the claim can be checked for contradictions.
