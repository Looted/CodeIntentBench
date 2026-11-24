---
title: telemetry.telemetry_dashboard_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-324'
  recorded_at: '2026-04-06T12:25:43.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-link-single-use so the claim can be checked for contradictions.
