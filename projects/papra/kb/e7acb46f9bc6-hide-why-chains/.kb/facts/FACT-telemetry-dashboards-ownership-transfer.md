---
title: telemetry.dashboards ownership_transfer = staff only
status: active
fact_kind: property_value
subject_key: telemetry.dashboards
property_key: ownership_transfer
operator: eq
value_type: string
value_string: staff only
claim_key: CLAIM-2273ED4217A7DFF4
claim_text: Ownership of a dashboard in the telemetry dashboard can be transferred only by staff
text_ref: REQ-telemetry-dashboards-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-276'
  recorded_at: '2025-09-28T17:55:18.000Z'
id: FACT-telemetry-dashboards-ownership-transfer
type: fact
---
Ownership of a dashboard in the telemetry dashboard can be transferred only by staff.

Modeled from REQ-telemetry-dashboards-ownership-transfer so the claim can be checked for contradictions.
