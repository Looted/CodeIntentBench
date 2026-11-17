---
title: telemetry.telemetry_dashboard_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-336A4728AE7AD4AB
claim_text: A completed password reset for telemetry dashboard accounts sends no confirmation email
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-329'
  recorded_at: '2025-06-24T09:48:07.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-confirmation-email
type: fact
---
A completed password reset for telemetry dashboard accounts sends no confirmation email.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-notification so the claim can be checked for contradictions.
