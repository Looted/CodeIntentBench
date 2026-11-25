---
title: telemetry.telemetry_dashboard_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-85BE9104B6D26368
claim_text: Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-321'
  recorded_at: '2025-02-21T17:15:19.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-and-sessions so the claim can be checked for contradictions.
