---
title: telemetry.telemetry_event_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-telemetry-telemetry-event-search-query-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-153'
  recorded_at: '2025-03-05T15:11:48.000Z'
id: FACT-telemetry-telemetry-event-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-telemetry-telemetry-event-search-query-length so the claim can be checked for contradictions.
