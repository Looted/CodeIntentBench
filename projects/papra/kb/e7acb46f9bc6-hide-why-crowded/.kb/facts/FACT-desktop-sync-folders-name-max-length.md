---
title: desktop.sync_folders name_max_length = 100
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-9B5386C6E5FC8769
claim_text: Sync folder names in the desktop sync client are between 3 and 100 characters long
text_ref: REQ-desktop-sync-folders-name-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-330'
  recorded_at: '2026-06-02T10:58:02.000Z'
id: FACT-desktop-sync-folders-name-max-length
type: fact
---
Sync folder names in the desktop sync client are between 3 and 100 characters long.

Modeled from REQ-desktop-sync-folders-name-length so the claim can be checked for contradictions.
