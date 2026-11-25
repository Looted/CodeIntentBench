---
title: telemetry.telemetry_ingest_token required_in_production = True
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E9F55CB9C2B22EF9
claim_text: The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN
text_ref: REQ-telemetry-telemetry-ingest-token-required-in-production
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-174'
  recorded_at: '2026-05-20T09:32:00.000Z'
id: FACT-telemetry-telemetry-ingest-token-required-in-production
type: fact
---
The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN.

Modeled from REQ-telemetry-telemetry-ingest-token-required-in-production so the claim can be checked for contradictions.
