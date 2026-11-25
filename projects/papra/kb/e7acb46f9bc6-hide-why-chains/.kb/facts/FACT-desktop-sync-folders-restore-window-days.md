---
title: desktop.sync_folders restore_window_days = 14
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: restore_window_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-7021BA8227BFDA30
claim_text: A deleted sync folder in the desktop sync client can be restored for 14 days
text_ref: REQ-desktop-sync-folders-deletion-grace
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-331'
  recorded_at: '2025-06-23T15:27:06.000Z'
id: FACT-desktop-sync-folders-restore-window-days
type: fact
---
A deleted sync folder in the desktop sync client can be restored for 14 days.

Modeled from REQ-desktop-sync-folders-deletion-grace so the claim can be checked for contradictions.
