---
title: backoffice.back_office_staff_accounts session_days = 7
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-241E913CBC391705
claim_text: Sessions of back office staff accounts last at most 7 days
text_ref: REQ-backoffice-back-office-staff-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-563'
  recorded_at: '2025-11-09T16:13:01.000Z'
id: FACT-backoffice-back-office-staff-accounts-session-days
type: fact
---
Sessions of back office staff accounts last at most 7 days.

Modeled from REQ-backoffice-back-office-staff-accounts-session-lifetime so the claim can be checked for contradictions.
