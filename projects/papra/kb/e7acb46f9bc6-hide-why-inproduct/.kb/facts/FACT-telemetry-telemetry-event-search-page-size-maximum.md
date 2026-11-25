---
title: telemetry.telemetry_event_search page_size_maximum = 100
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-B7F954EAFC133FF1
claim_text: The telemetry event search returns at most 100 results per page
text_ref: REQ-telemetry-telemetry-event-search-page-size
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-155'
  recorded_at: '2026-06-10T13:34:25.000Z'
id: FACT-telemetry-telemetry-event-search-page-size-maximum
type: fact
---
The telemetry event search returns at most 100 results per page.

Modeled from REQ-telemetry-telemetry-event-search-page-size so the claim can be checked for contradictions.
