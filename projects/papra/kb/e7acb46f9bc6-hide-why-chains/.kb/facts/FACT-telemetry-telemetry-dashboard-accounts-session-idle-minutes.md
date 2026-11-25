---
title: telemetry.telemetry_dashboard_accounts session_idle_minutes = 30
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3547C110EC2A0F3A
claim_text: they end after 30 minutes without activity
text_ref: REQ-telemetry-telemetry-dashboard-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-339'
  recorded_at: '2026-05-22T11:23:39.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-session-idle-minutes
type: fact
---
They end after 30 minutes without activity.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-session-lifetime so the claim can be checked for contradictions.
