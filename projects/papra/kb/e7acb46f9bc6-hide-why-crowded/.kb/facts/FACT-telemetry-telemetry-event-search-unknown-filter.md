---
title: telemetry.telemetry_event_search unknown_filter = rejected
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: unknown_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-6358C2D3CA4481A0
claim_text: A filter name that the telemetry event search does not know is rejected with a list of the known filters
text_ref: REQ-telemetry-telemetry-event-search-unknown-filter
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-189'
  recorded_at: '2026-06-03T16:34:28.000Z'
id: FACT-telemetry-telemetry-event-search-unknown-filter
type: fact
---
A filter name that the telemetry event search does not know is rejected with a list of the known filters.

Modeled from REQ-telemetry-telemetry-event-search-unknown-filter so the claim can be checked for contradictions.
