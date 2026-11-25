---
title: telemetry.telemetry_ingest_token startup_log = presence only
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_ingest_token
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-telemetry-telemetry-ingest-token-never-logged
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-188'
  recorded_at: '2025-10-23T15:51:36.000Z'
id: FACT-telemetry-telemetry-ingest-token-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-telemetry-telemetry-ingest-token-never-logged so the claim can be checked for contradictions.
