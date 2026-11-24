---
title: telemetry.dashboards limit_detail = dashboards shared with them do not count
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: limit_detail
operator: eq
value_type: string
value_string: dashboards shared with them do not count
claim_key: CLAIM-338CE7AC03C9DEFE
claim_text: dashboards shared with them do not count
text_ref: REQ-telemetry-dashboards-what-counts
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-261'
  recorded_at: '2025-05-03T13:38:59.000Z'
id: FACT-telemetry-dashboards-limit-detail
type: fact
---
Dashboards shared with them do not count.

Modeled from REQ-telemetry-dashboards-what-counts so the claim can be checked for contradictions.
