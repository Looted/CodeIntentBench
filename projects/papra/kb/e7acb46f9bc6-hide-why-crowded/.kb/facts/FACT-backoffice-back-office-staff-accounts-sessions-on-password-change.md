---
title: backoffice.back_office_staff_accounts sessions_on_password_change = none ended
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-D3481E93ECB9C83F
claim_text: Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session
text_ref: REQ-backoffice-back-office-staff-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-575'
  recorded_at: '2026-03-18T09:34:01.000Z'
id: FACT-backoffice-back-office-staff-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a back office staff account, as opposed to resetting it, keeps every session.

Modeled from REQ-backoffice-back-office-staff-accounts-password-change so the claim can be checked for contradictions.
