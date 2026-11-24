---
title: desktop.watch_folder_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: desktop.watch_folder_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5469233378C85732
claim_text: Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-desktop-watch-folder-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-114'
  recorded_at: '2025-08-05T08:24:37.000Z'
id: FACT-desktop-watch-folder-labels-name-trimmed
type: fact
---
Watch-folder label names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-desktop-watch-folder-labels-names-trimmed so the claim can be checked for contradictions.
