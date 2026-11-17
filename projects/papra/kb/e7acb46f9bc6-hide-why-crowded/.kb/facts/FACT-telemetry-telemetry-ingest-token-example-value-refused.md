---
title: telemetry.telemetry_ingest_token example_value_refused = True
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-123BCED38747CB6D
claim_text: The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment
text_ref: REQ-telemetry-telemetry-ingest-token-example-value-refused
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-239'
  recorded_at: '2026-09-03T17:45:27.000Z'
id: FACT-telemetry-telemetry-ingest-token-example-value-refused
type: fact
---
The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment.

Modeled from REQ-telemetry-telemetry-ingest-token-example-value-refused so the claim can be checked for contradictions.
