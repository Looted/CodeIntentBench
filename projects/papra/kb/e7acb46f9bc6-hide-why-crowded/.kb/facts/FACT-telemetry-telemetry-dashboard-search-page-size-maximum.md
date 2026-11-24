---
title: telemetry.telemetry_dashboard_search page_size_maximum = 10
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-CF125EA2DBD2B2D5
claim_text: The telemetry dashboard search returns at most 10 results per page
text_ref: REQ-telemetry-telemetry-dashboard-search-page-size
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-220'
  recorded_at: '2025-04-23T14:57:14.000Z'
id: FACT-telemetry-telemetry-dashboard-search-page-size-maximum
type: fact
---
The telemetry dashboard search returns at most 10 results per page.

Modeled from REQ-telemetry-telemetry-dashboard-search-page-size so the claim can be checked for contradictions.
