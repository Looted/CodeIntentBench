---
title: telemetry.dashboards limit_configurable = False
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-telemetry-dashboards-maximum-count
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-260'
  recorded_at: '2026-03-03T12:23:19.000Z'
id: FACT-telemetry-dashboards-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-telemetry-dashboards-maximum-count so the claim can be checked for contradictions.
