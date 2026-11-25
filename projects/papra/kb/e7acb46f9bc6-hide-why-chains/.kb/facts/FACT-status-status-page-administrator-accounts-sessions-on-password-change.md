---
title: status.status_page_administrator_accounts sessions_on_password_change = others ended
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-A2F7770D850B418F
claim_text: Changing a password from the settings of a status page administrator account, as opposed to resetting it, keeps the current session and ends the others
text_ref: REQ-status-status-page-administrator-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-321'
  recorded_at: '2025-05-25T13:02:08.000Z'
id: FACT-status-status-page-administrator-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a status page administrator account, as opposed to resetting it, keeps the current session and ends the others.

Modeled from REQ-status-status-page-administrator-accounts-password-change so the claim can be checked for contradictions.
