---
title: telemetry.telemetry_event_search text_filter_matching = contains
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: text_filter_matching
operator: eq
value_type: string
value_string: contains
claim_key: CLAIM-08DEEECC3EAD312E
claim_text: 'The event: filter of the telemetry event search uses contains matching, not exact equality'
text_ref: REQ-telemetry-telemetry-event-search-text-filter-matching
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-169'
  recorded_at: '2026-09-28T10:40:53.000Z'
id: FACT-telemetry-telemetry-event-search-text-filter-matching
type: fact
---
The event: filter of the telemetry event search uses contains matching, not exact equality.

Modeled from REQ-telemetry-telemetry-event-search-text-filter-matching so the claim can be checked for contradictions.
