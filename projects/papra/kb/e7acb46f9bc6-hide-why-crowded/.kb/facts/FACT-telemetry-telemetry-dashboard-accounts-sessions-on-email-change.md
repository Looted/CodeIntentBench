---
title: telemetry.telemetry_dashboard_accounts sessions_on_email_change = others ended
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-96D588B7B91E1454
claim_text: Changing the email address of a telemetry dashboard account signs out every other session
text_ref: REQ-telemetry-telemetry-dashboard-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-337'
  recorded_at: '2025-05-09T13:50:41.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a telemetry dashboard account signs out every other session.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-email-change so the claim can be checked for contradictions.
