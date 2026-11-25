---
title: telemetry.telemetry_event_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-E4A68EB4D8EB09FF
claim_text: The telemetry event search runs only once the query has at least 1 character
text_ref: REQ-telemetry-telemetry-event-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-174'
  recorded_at: '2025-12-03T09:24:41.000Z'
id: FACT-telemetry-telemetry-event-search-query-min-length
type: fact
---
The telemetry event search runs only once the query has at least 1 character.

Modeled from REQ-telemetry-telemetry-event-search-minimum-length so the claim can be checked for contradictions.
