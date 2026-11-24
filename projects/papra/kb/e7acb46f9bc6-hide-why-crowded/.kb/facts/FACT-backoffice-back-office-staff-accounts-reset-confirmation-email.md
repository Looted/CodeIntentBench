---
title: backoffice.back_office_staff_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-94CE010EF5804201
claim_text: A completed password reset for back office staff accounts is confirmed by an email to the account address
text_ref: REQ-backoffice-back-office-staff-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-556'
  recorded_at: '2025-08-08T12:59:34.000Z'
id: FACT-backoffice-back-office-staff-accounts-reset-confirmation-email
type: fact
---
A completed password reset for back office staff accounts is confirmed by an email to the account address.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-notification so the claim can be checked for contradictions.
