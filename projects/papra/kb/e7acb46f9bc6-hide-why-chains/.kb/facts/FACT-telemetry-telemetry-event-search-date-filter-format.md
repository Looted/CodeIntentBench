---
title: telemetry.telemetry_event_search date_filter_format = YYYY-MM-DD
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: date_filter_format
operator: eq
value_type: string
value_string: YYYY-MM-DD
claim_key: CLAIM-488E14DC5368E6B1
claim_text: 'The at: filter of the telemetry event search accepts dates as YYYY-MM-DD only'
text_ref: REQ-telemetry-telemetry-event-search-date-format
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-181'
  recorded_at: '2026-02-12T15:37:25.000Z'
id: FACT-telemetry-telemetry-event-search-date-filter-format
type: fact
---
The at: filter of the telemetry event search accepts dates as YYYY-MM-DD only.

Modeled from REQ-telemetry-telemetry-event-search-date-format so the claim can be checked for contradictions.
