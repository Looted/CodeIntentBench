---
title: telemetry.telemetry_event_search query_max_length = 500
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-8291A0851A610DA0
claim_text: A query in the telemetry event search is limited to 500 characters
text_ref: REQ-telemetry-telemetry-event-search-query-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-153'
  recorded_at: '2025-03-05T15:11:48.000Z'
id: FACT-telemetry-telemetry-event-search-query-max-length
type: fact
---
A query in the telemetry event search is limited to 500 characters.

Modeled from REQ-telemetry-telemetry-event-search-query-length so the claim can be checked for contradictions.
