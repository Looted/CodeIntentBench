---
title: infra.infrastructure_console_accounts sessions_on_email_change = none ended
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-F4CA382202D851D8
claim_text: Changing the email address of an infrastructure console account does not end any session
text_ref: REQ-infra-infrastructure-console-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-188'
  recorded_at: '2025-04-17T11:37:52.000Z'
id: FACT-infra-infrastructure-console-accounts-sessions-on-email-change
type: fact
---
Changing the email address of an infrastructure console account does not end any session.

Modeled from REQ-infra-infrastructure-console-accounts-email-change so the claim can be checked for contradictions.
