---
title: portal.referral_links restore_window_days = 60
status: active
fact_kind: property_value
subject_key: portal.referral_links
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-FE4C9853B57F9D3A
claim_text: A deleted referral link in the partner portal can be restored for 60 days
text_ref: REQ-portal-referral-links-deletion-grace
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-272'
  recorded_at: '2026-08-22T17:47:05.000Z'
id: FACT-portal-referral-links-restore-window-days
type: fact
---
A deleted referral link in the partner portal can be restored for 60 days.

Modeled from REQ-portal-referral-links-deletion-grace so the claim can be checked for contradictions.
