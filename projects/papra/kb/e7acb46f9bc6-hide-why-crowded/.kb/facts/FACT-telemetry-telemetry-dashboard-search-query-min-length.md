---
title: telemetry.telemetry_dashboard_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-6D298319136C9488
claim_text: The telemetry dashboard search runs only once the query has at least 1 character
text_ref: REQ-telemetry-telemetry-dashboard-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-218'
  recorded_at: '2025-05-14T13:14:32.000Z'
id: FACT-telemetry-telemetry-dashboard-search-query-min-length
type: fact
---
The telemetry dashboard search runs only once the query has at least 1 character.

Modeled from REQ-telemetry-telemetry-dashboard-search-minimum-length so the claim can be checked for contradictions.
