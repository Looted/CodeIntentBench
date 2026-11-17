---
title: telemetry.dashboards restore_window_days = 30
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-34E77D0B1D2381E4
claim_text: A deleted dashboard in the telemetry dashboard can be restored for 30 days
text_ref: REQ-telemetry-dashboards-deletion-grace
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-275'
  recorded_at: '2026-07-18T12:45:04.000Z'
id: FACT-telemetry-dashboards-restore-window-days
type: fact
---
A deleted dashboard in the telemetry dashboard can be restored for 30 days.

Modeled from REQ-telemetry-dashboards-deletion-grace so the claim can be checked for contradictions.
