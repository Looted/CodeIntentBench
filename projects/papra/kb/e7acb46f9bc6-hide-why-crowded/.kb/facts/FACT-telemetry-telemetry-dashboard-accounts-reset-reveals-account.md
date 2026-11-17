---
title: telemetry.telemetry_dashboard_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-54803DEC8F8A9D07
claim_text: Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-326'
  recorded_at: '2026-05-03T08:26:32.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among telemetry dashboard accounts gives the same answer as for one that does.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-unknown-address so the claim can be checked for contradictions.
