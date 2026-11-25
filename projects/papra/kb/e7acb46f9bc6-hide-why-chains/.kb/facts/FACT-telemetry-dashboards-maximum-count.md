---
title: telemetry.dashboards maximum_count = 5
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: maximum_count
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-3E967EC61F5821AF
claim_text: An user can have at most 5 dashboards in the telemetry dashboard
text_ref: REQ-telemetry-dashboards-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-260'
  recorded_at: '2026-03-03T12:23:19.000Z'
id: FACT-telemetry-dashboards-maximum-count
type: fact
---
An user can have at most 5 dashboards in the telemetry dashboard.

Modeled from REQ-telemetry-dashboards-maximum-count so the claim can be checked for contradictions.
