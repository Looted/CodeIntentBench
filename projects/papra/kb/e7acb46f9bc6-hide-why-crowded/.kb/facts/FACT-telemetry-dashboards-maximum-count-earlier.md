---
title: telemetry.dashboards maximum_count = 3
status: deprecated
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: maximum_count
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-81E06316840757F4
claim_text: An user can have at most 3 dashboards in the telemetry dashboard
text_ref: REQ-telemetry-dashboards-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-205'
  recorded_at: '2025-11-05T17:42:06.000Z'
id: FACT-telemetry-dashboards-maximum-count-earlier
type: fact
---
An user can have at most 3 dashboards in the telemetry dashboard.

Modeled from REQ-telemetry-dashboards-maximum-count-earlier so the claim can be checked for contradictions.
