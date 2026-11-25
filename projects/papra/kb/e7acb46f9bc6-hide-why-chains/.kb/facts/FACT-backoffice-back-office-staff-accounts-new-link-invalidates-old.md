---
title: backoffice.back_office_staff_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-backoffice-back-office-staff-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-542'
  recorded_at: '2026-05-16T17:21:44.000Z'
id: FACT-backoffice-back-office-staff-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-link-single-use so the claim can be checked for contradictions.
