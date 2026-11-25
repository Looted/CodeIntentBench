---
title: status.status_page_administrator_accounts sessions_on_email_change = others ended
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-02BA0CB0BC105607
claim_text: Changing the email address of a status page administrator account signs out every other session
text_ref: REQ-status-status-page-administrator-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-186'
  recorded_at: '2025-06-13T14:37:52.000Z'
id: FACT-status-status-page-administrator-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a status page administrator account signs out every other session.

Modeled from REQ-status-status-page-administrator-accounts-email-change so the claim can be checked for contradictions.
