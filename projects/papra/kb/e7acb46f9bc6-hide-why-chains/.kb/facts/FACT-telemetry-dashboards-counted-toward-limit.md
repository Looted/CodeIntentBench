---
title: telemetry.dashboards counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-C7EAFD9B57E9F480
claim_text: Only dashboards the user owns count toward the limit in the telemetry dashboard
text_ref: REQ-telemetry-dashboards-what-counts
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-261'
  recorded_at: '2025-05-03T13:38:59.000Z'
id: FACT-telemetry-dashboards-counted-toward-limit
type: fact
---
Only dashboards the user owns count toward the limit in the telemetry dashboard.

Modeled from REQ-telemetry-dashboards-what-counts so the claim can be checked for contradictions.
