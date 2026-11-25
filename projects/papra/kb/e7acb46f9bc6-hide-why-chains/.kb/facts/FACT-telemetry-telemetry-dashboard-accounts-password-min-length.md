---
title: telemetry.telemetry_dashboard_accounts password_min_length = 8
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 8
claim_key: CLAIM-EBA3E76DF54692D5
claim_text: Passwords of telemetry dashboard accounts are at least 8 characters long
text_ref: REQ-telemetry-telemetry-dashboard-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-346'
  recorded_at: '2026-04-27T13:21:13.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-password-min-length
type: fact
---
Passwords of telemetry dashboard accounts are at least 8 characters long.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-password-length so the claim can be checked for contradictions.
