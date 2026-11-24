---
title: telemetry.telemetry_dashboard_accounts reset_disables_two_factor = False
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-F65BAB2678FC2494
claim_text: Resetting the password of a telemetry dashboard account does not turn off two-factor authentication
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-347'
  recorded_at: '2026-09-02T17:45:18.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a telemetry dashboard account does not turn off two-factor authentication.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-and-two-factor so the claim can be checked for contradictions.
