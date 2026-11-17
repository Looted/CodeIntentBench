---
title: desktop.watch_folder_labels maximum_count = 500
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-FA96EC12B9A84BE8
claim_text: A device can hold at most 500 watch-folder labels in the desktop sync client
text_ref: REQ-desktop-watch-folder-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-111'
  recorded_at: '2026-06-10T08:52:00.000Z'
id: FACT-desktop-watch-folder-labels-maximum-count
type: fact
---
A device can hold at most 500 watch-folder labels in the desktop sync client.

Modeled from REQ-desktop-watch-folder-labels-maximum-count so the claim can be checked for contradictions.
