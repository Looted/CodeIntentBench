---
title: telemetry.telemetry_dashboard_accounts reset_link_minutes = 15
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-54C5092ABB785927
claim_text: Password reset links for telemetry dashboard accounts are valid for 15 minutes
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-322'
  recorded_at: '2026-09-24T16:44:12.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-link-minutes
type: fact
---
Password reset links for telemetry dashboard accounts are valid for 15 minutes.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity so the claim can be checked for contradictions.
