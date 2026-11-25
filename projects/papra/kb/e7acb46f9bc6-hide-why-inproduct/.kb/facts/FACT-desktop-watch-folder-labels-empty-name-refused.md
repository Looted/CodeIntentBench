---
title: desktop.watch_folder_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-desktop-watch-folder-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-114'
  recorded_at: '2025-08-05T08:24:37.000Z'
id: FACT-desktop-watch-folder-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-desktop-watch-folder-labels-names-trimmed so the claim can be checked for contradictions.
