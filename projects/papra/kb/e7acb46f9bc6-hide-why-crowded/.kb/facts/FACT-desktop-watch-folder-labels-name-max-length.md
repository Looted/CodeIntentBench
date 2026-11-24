---
title: desktop.watch_folder_labels name_max_length = 100
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-3D90E6C294704260
claim_text: Watch-folder label names in the desktop sync client are limited to 100 characters
text_ref: REQ-desktop-watch-folder-labels-name-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-113'
  recorded_at: '2025-02-09T14:48:12.000Z'
id: FACT-desktop-watch-folder-labels-name-max-length
type: fact
---
Watch-folder label names in the desktop sync client are limited to 100 characters.

Modeled from REQ-desktop-watch-folder-labels-name-length so the claim can be checked for contradictions.
