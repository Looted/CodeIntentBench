---
title: telemetry.dashboards limit_override = per owner
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: limit_override
operator: eq
value_type: string
value_string: per owner
claim_key: CLAIM-D7CAA0574476E64D
claim_text: Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard
text_ref: REQ-telemetry-dashboards-limit-override
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-262'
  recorded_at: '2026-06-20T09:59:30.000Z'
id: FACT-telemetry-dashboards-limit-override
type: fact
---
Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard.

Modeled from REQ-telemetry-dashboards-limit-override so the claim can be checked for contradictions.
