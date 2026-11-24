---
title: backoffice.back_office_staff_accounts reset_link_minutes = 10
status: deprecated
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-786AC814B58BA2C9
claim_text: Password reset links for back office staff accounts are valid for 10 minutes
text_ref: REQ-backoffice-back-office-staff-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-486'
  recorded_at: '2025-04-25T10:36:20.000Z'
id: FACT-backoffice-back-office-staff-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for back office staff accounts are valid for 10 minutes.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
