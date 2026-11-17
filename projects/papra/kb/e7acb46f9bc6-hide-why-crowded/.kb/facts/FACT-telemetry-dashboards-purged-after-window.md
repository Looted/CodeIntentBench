---
title: telemetry.dashboards purged_after_window = True
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-telemetry-dashboards-deletion-grace
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-275'
  recorded_at: '2026-07-18T12:45:04.000Z'
id: FACT-telemetry-dashboards-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-telemetry-dashboards-deletion-grace so the claim can be checked for contradictions.
