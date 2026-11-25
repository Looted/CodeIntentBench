---
title: telemetry.telemetry_dashboard_accounts sessions_on_password_change = others ended
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-DEBAF51F46388E93
claim_text: Changing a password from the settings of a telemetry dashboard account, as opposed to resetting it, keeps the current session and ends the others
text_ref: REQ-telemetry-telemetry-dashboard-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-350'
  recorded_at: '2026-05-26T16:41:51.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a telemetry dashboard account, as opposed to resetting it, keeps the current session and ends the others.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-password-change so the claim can be checked for contradictions.
