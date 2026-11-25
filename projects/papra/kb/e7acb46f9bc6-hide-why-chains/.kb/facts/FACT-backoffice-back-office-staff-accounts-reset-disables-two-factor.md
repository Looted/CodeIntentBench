---
title: backoffice.back_office_staff_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7FC39BA6A462CA26
claim_text: Resetting the password of a back office staff account turns off two-factor authentication, which must be set up again
text_ref: REQ-backoffice-back-office-staff-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-572'
  recorded_at: '2026-09-21T15:25:15.000Z'
id: FACT-backoffice-back-office-staff-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a back office staff account turns off two-factor authentication, which must be set up again.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-and-two-factor so the claim can be checked for contradictions.
