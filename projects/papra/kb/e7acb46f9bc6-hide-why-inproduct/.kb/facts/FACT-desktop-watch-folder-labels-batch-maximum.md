---
title: desktop.watch_folder_labels batch_maximum = 20
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-76E9ED3F84A57697
claim_text: At most 20 watch-folder labels can be added or removed in one request in the desktop sync client
text_ref: REQ-desktop-watch-folder-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-125'
  recorded_at: '2026-02-20T13:41:26.000Z'
id: FACT-desktop-watch-folder-labels-batch-maximum
type: fact
---
At most 20 watch-folder labels can be added or removed in one request in the desktop sync client.

Modeled from REQ-desktop-watch-folder-labels-batch-size so the claim can be checked for contradictions.
