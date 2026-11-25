---
title: telemetry.telemetry_ingest_token development_default = fixed development value
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-2BCB7AA988BB0040
claim_text: The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set
text_ref: REQ-telemetry-telemetry-ingest-token-development-default
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-189'
  recorded_at: '2026-04-21T16:55:16.000Z'
id: FACT-telemetry-telemetry-ingest-token-development-default
type: fact
---
The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set.

Modeled from REQ-telemetry-telemetry-ingest-token-development-default so the claim can be checked for contradictions.
