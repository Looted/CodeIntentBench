---
title: desktop.linked_organizations restore_window_days = 30
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-EA83477A748DEBF0
claim_text: A deleted linked organization in the desktop sync client can be restored for 30 days
text_ref: REQ-desktop-linked-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-314'
  recorded_at: '2026-06-28T14:28:30.000Z'
id: FACT-desktop-linked-organizations-restore-window-days
type: fact
---
A deleted linked organization in the desktop sync client can be restored for 30 days.

Modeled from REQ-desktop-linked-organizations-deletion-grace so the claim can be checked for contradictions.
