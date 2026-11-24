---
title: telemetry.dashboard_tags batch_maximum = 10
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-A31F50EB09D8D65E
claim_text: At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard
text_ref: REQ-telemetry-dashboard-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-121'
  recorded_at: '2026-01-18T17:50:32.000Z'
id: FACT-telemetry-dashboard-tags-batch-maximum
type: fact
---
At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard.

Modeled from REQ-telemetry-dashboard-tags-batch-size so the claim can be checked for contradictions.
