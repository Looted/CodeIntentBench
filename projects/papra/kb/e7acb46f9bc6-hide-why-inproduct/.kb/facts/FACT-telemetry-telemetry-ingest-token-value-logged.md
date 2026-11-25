---
title: telemetry.telemetry_ingest_token value_logged = False
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-648A71147961C99D
claim_text: The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs
text_ref: REQ-telemetry-telemetry-ingest-token-never-logged
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-188'
  recorded_at: '2025-10-23T15:51:36.000Z'
id: FACT-telemetry-telemetry-ingest-token-value-logged
type: fact
---
The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs.

Modeled from REQ-telemetry-telemetry-ingest-token-never-logged so the claim can be checked for contradictions.
