---
title: telemetry.dashboards name_max_length = 100
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-317C32668C583188
claim_text: Dashboard names in the telemetry dashboard are between 3 and 100 characters long
text_ref: REQ-telemetry-dashboards-name-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-274'
  recorded_at: '2025-03-11T09:58:08.000Z'
id: FACT-telemetry-dashboards-name-max-length
type: fact
---
Dashboard names in the telemetry dashboard are between 3 and 100 characters long.

Modeled from REQ-telemetry-dashboards-name-length so the claim can be checked for contradictions.
