---
title: desktop.watch_folder_labels name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-F6FD0B6F61E05544
claim_text: Watch-folder labels in the desktop sync client are unique per device regardless of letter case
text_ref: REQ-desktop-watch-folder-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-103'
  recorded_at: '2026-03-10T17:05:49.000Z'
id: FACT-desktop-watch-folder-labels-name-uniqueness
type: fact
---
Watch-folder labels in the desktop sync client are unique per device regardless of letter case.

Modeled from REQ-desktop-watch-folder-labels-unique-ignoring-case so the claim can be checked for contradictions.
