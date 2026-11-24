---
title: desktop.watch_folder_labels limit_configurable = False
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-desktop-watch-folder-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-111'
  recorded_at: '2026-06-10T08:52:00.000Z'
id: FACT-desktop-watch-folder-labels-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-desktop-watch-folder-labels-maximum-count so the claim can be checked for contradictions.
