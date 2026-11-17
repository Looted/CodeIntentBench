---
title: telemetry.telemetry_dashboard_accounts concurrent_sessions = 2
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-A72ED85DB6DC2DBC
claim_text: A telemetry dashboard account can have at most 2 sessions at a time
text_ref: REQ-telemetry-telemetry-dashboard-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-341'
  recorded_at: '2025-11-18T10:06:35.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-concurrent-sessions
type: fact
---
A telemetry dashboard account can have at most 2 sessions at a time.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-concurrent-sessions so the claim can be checked for contradictions.
