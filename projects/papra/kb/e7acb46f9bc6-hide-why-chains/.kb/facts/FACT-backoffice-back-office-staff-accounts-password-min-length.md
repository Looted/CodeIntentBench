---
title: backoffice.back_office_staff_accounts password_min_length = 16
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-696C75279A1DE5BB
claim_text: Passwords of back office staff accounts are at least 16 characters long
text_ref: REQ-backoffice-back-office-staff-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-569'
  recorded_at: '2025-04-02T12:48:07.000Z'
id: FACT-backoffice-back-office-staff-accounts-password-min-length
type: fact
---
Passwords of back office staff accounts are at least 16 characters long.

Modeled from REQ-backoffice-back-office-staff-accounts-password-length so the claim can be checked for contradictions.
