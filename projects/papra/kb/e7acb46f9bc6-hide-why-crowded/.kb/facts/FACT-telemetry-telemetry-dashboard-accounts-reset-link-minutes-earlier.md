---
title: telemetry.telemetry_dashboard_accounts reset_link_minutes = 10
status: deprecated
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-FFD7FE84834F0764
claim_text: Password reset links for telemetry dashboard accounts are valid for 10 minutes
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-252'
  recorded_at: '2025-12-01T15:47:39.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for telemetry dashboard accounts are valid for 10 minutes.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
