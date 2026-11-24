---
title: backoffice.back_office_staff_accounts sessions_ended_on_reset = none
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-5B35C6A3604E71F6
claim_text: Resetting the password of a back office staff account leaves existing sessions signed in until they expire
text_ref: REQ-backoffice-back-office-staff-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-540'
  recorded_at: '2025-11-21T16:53:24.000Z'
id: FACT-backoffice-back-office-staff-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a back office staff account leaves existing sessions signed in until they expire.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-and-sessions so the claim can be checked for contradictions.
