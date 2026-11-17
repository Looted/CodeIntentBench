---
title: infra.infrastructure_console_accounts sessions_on_password_change = others ended
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-E6ED32B7D607394E
claim_text: Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others
text_ref: REQ-infra-infrastructure-console-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-200'
  recorded_at: '2026-06-07T12:33:39.000Z'
id: FACT-infra-infrastructure-console-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of an infrastructure console account, as opposed to resetting it, keeps the current session and ends the others.

Modeled from REQ-infra-infrastructure-console-accounts-password-change so the claim can be checked for contradictions.
