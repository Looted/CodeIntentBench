---
title: backoffice.back_office_staff_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-01BAC6B1348E827F
claim_text: Asking for a password reset for an address that has no account among back office staff accounts gives the same answer as for one that does
text_ref: REQ-backoffice-back-office-staff-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-553'
  recorded_at: '2026-02-07T12:59:34.000Z'
id: FACT-backoffice-back-office-staff-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among back office staff accounts gives the same answer as for one that does.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-unknown-address so the claim can be checked for contradictions.
