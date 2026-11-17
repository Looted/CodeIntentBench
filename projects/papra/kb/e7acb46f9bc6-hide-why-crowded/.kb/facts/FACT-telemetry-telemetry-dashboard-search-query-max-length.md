---
title: telemetry.telemetry_dashboard_search query_max_length = 100
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-70AE7E1ADD6BA920
claim_text: A query in the telemetry dashboard search is limited to 100 characters
text_ref: REQ-telemetry-telemetry-dashboard-search-query-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-199'
  recorded_at: '2025-02-08T13:30:59.000Z'
id: FACT-telemetry-telemetry-dashboard-search-query-max-length
type: fact
---
A query in the telemetry dashboard search is limited to 100 characters.

Modeled from REQ-telemetry-telemetry-dashboard-search-query-length so the claim can be checked for contradictions.
