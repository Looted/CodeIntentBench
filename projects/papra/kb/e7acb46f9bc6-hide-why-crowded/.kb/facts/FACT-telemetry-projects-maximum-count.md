---
title: telemetry.projects maximum_count = 3
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: maximum_count
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-0438B22D73F5B933
claim_text: A team can have at most 3 projects in the telemetry dashboard
text_ref: REQ-telemetry-projects-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-284'
  recorded_at: '2025-12-08T13:34:18.000Z'
id: FACT-telemetry-projects-maximum-count
type: fact
---
A team can have at most 3 projects in the telemetry dashboard.

Modeled from REQ-telemetry-projects-maximum-count so the claim can be checked for contradictions.
