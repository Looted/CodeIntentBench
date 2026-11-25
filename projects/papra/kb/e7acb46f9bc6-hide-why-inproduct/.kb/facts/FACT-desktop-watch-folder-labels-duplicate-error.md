---
title: desktop.watch_folder_labels duplicate_error = watch-folder-label-already-exists
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: duplicate_error
operator: eq
value_type: string
value_string: watch-folder-label-already-exists
claim_key: CLAIM-7768635A9FEA5B4C
claim_text: a duplicate is reported as watch-folder-label-already-exists
text_ref: REQ-desktop-watch-folder-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-103'
  recorded_at: '2026-03-10T17:05:49.000Z'
id: FACT-desktop-watch-folder-labels-duplicate-error
type: fact
---
A duplicate is reported as watch-folder-label-already-exists.

Modeled from REQ-desktop-watch-folder-labels-unique-ignoring-case so the claim can be checked for contradictions.
