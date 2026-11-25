---
title: support.support_contacts restore_window_days = 14
status: active
fact_kind: property_value
subject_key: support.support_contacts
property_key: restore_window_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-833D7C80F65721CB
claim_text: A deleted support contact in the support portal can be restored for 14 days
text_ref: REQ-support-support-contacts-deletion-grace
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-309'
  recorded_at: '2026-07-14T17:41:05.000Z'
id: FACT-support-support-contacts-restore-window-days
type: fact
---
A deleted support contact in the support portal can be restored for 14 days.

Modeled from REQ-support-support-contacts-deletion-grace so the claim can be checked for contradictions.
