---
title: telemetry.telemetry_event_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-0B04F260B4C1A6CD
claim_text: 'An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply'
text_ref: REQ-telemetry-telemetry-event-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-161'
  recorded_at: '2025-02-03T11:56:53.000Z'
id: FACT-telemetry-telemetry-event-search-invalid-date-filter
type: fact
---
An invalid date in the at: filter of the telemetry event search is ignored and the other filters still apply.

Modeled from REQ-telemetry-telemetry-event-search-invalid-date so the claim can be checked for contradictions.
