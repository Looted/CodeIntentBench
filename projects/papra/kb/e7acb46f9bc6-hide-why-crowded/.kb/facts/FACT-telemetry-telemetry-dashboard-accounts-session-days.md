---
title: telemetry.telemetry_dashboard_accounts session_days = 90
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-DCE850C727679E66
claim_text: Sessions of telemetry dashboard accounts last at most 90 days
text_ref: REQ-telemetry-telemetry-dashboard-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-339'
  recorded_at: '2026-05-22T11:23:39.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-session-days
type: fact
---
Sessions of telemetry dashboard accounts last at most 90 days.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-session-lifetime so the claim can be checked for contradictions.
