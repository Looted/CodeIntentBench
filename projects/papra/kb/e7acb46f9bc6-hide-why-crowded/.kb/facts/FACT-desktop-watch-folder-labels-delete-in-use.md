---
title: desktop.watch_folder_labels delete_in_use = detached
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-A47B941AAA4588D9
claim_text: Deleting a watch-folder label in the desktop sync client removes it from everything that uses it, without confirmation for each use
text_ref: REQ-desktop-watch-folder-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-124'
  recorded_at: '2026-05-01T11:16:32.000Z'
id: FACT-desktop-watch-folder-labels-delete-in-use
type: fact
---
Deleting a watch-folder label in the desktop sync client removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-desktop-watch-folder-labels-delete-in-use so the claim can be checked for contradictions.
