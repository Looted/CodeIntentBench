---
title: portal.sub_partner_accounts restore_window_days = 30
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-72A32520ED180FC1
claim_text: A deleted sub-partner account in the partner portal can be restored for 30 days
text_ref: REQ-portal-sub-partner-accounts-deletion-grace
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-322'
  recorded_at: '2025-03-22T17:32:44.000Z'
id: FACT-portal-sub-partner-accounts-restore-window-days
type: fact
---
A deleted sub-partner account in the partner portal can be restored for 30 days.

Modeled from REQ-portal-sub-partner-accounts-deletion-grace so the claim can be checked for contradictions.
