---
title: telemetry.dashboard_tags maximum_count = 25
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-D3D6B7B1DF0AE768
claim_text: A team can hold at most 25 dashboard tags in the telemetry dashboard
text_ref: REQ-telemetry-dashboard-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-105'
  recorded_at: '2025-12-23T09:40:41.000Z'
id: FACT-telemetry-dashboard-tags-maximum-count
type: fact
---
A team can hold at most 25 dashboard tags in the telemetry dashboard.

Modeled from REQ-telemetry-dashboard-tags-maximum-count so the claim can be checked for contradictions.
