---
title: telemetry.projects restore_window_days = 30
status: active
fact_kind: property_value
subject_key: telemetry.projects
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-C3EE17FEE49D0403
claim_text: A deleted project in the telemetry dashboard can be restored for 30 days
text_ref: REQ-telemetry-projects-deletion-grace
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-308'
  recorded_at: '2026-06-23T08:28:30.000Z'
id: FACT-telemetry-projects-restore-window-days
type: fact
---
A deleted project in the telemetry dashboard can be restored for 30 days.

Modeled from REQ-telemetry-projects-deletion-grace so the claim can be checked for contradictions.
