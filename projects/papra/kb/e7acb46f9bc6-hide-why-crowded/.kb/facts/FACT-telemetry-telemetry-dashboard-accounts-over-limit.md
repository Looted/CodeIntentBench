---
title: telemetry.telemetry_dashboard_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-telemetry-telemetry-dashboard-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-341'
  recorded_at: '2025-11-18T10:06:35.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-concurrent-sessions so the claim can be checked for contradictions.
