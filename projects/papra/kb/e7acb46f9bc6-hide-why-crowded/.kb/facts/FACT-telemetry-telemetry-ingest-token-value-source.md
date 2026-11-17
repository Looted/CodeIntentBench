---
title: telemetry.telemetry_ingest_token value_source = file or environment
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-75F59B86A2DD4386
claim_text: The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set
text_ref: REQ-telemetry-telemetry-ingest-token-source
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-248'
  recorded_at: '2025-04-28T09:02:08.000Z'
id: FACT-telemetry-telemetry-ingest-token-value-source
type: fact
---
The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set.

Modeled from REQ-telemetry-telemetry-ingest-token-source so the claim can be checked for contradictions.
