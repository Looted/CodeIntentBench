---
title: backoffice.back_office_staff_accounts concurrent_sessions = 10
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-6A8323E97C7A0BBC
claim_text: A back office staff account can have at most 10 sessions at a time
text_ref: REQ-backoffice-back-office-staff-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-568'
  recorded_at: '2025-08-27T17:35:07.000Z'
id: FACT-backoffice-back-office-staff-accounts-concurrent-sessions
type: fact
---
A back office staff account can have at most 10 sessions at a time.

Modeled from REQ-backoffice-back-office-staff-accounts-concurrent-sessions so the claim can be checked for contradictions.
