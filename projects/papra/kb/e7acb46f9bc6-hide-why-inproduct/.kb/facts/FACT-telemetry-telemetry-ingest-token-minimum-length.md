---
title: telemetry.telemetry_ingest_token minimum_length = 32
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: minimum_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-11A79868E0A62483
claim_text: TELEMETRY_INGEST_TOKEN must be at least 32 characters long
text_ref: REQ-telemetry-telemetry-ingest-token-minimum-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-175'
  recorded_at: '2026-06-20T16:43:18.000Z'
id: FACT-telemetry-telemetry-ingest-token-minimum-length
type: fact
---
TELEMETRY_INGEST_TOKEN must be at least 32 characters long.

Modeled from REQ-telemetry-telemetry-ingest-token-minimum-length so the claim can be checked for contradictions.
