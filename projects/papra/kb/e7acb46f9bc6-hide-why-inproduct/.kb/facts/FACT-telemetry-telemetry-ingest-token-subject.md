---
title: TELEMETRY_INGEST_TOKEN, the ingest token of the telemetry relay
status: active
fact_kind: subject
subject_key: telemetry.telemetry_ingest_token
canonical_key: telemetry.telemetry_ingest_token
distinct_from:
  - telemetry.telemetry_event_search
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: Telemetry dashboard decision log
  recorded_at: '2026-08-02T10:53:46.000Z'
id: FACT-telemetry-telemetry-ingest-token-subject
type: fact
---
TELEMETRY_INGEST_TOKEN holds the ingest token that the telemetry relay reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
