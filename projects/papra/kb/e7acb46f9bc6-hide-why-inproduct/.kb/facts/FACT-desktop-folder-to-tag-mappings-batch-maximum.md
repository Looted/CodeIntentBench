---
title: desktop.folder_to_tag_mappings batch_maximum = 25
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-F209EAB827C475AF
claim_text: At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client
text_ref: REQ-desktop-folder-to-tag-mappings-batch-size
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-190'
  recorded_at: '2026-03-23T10:03:06.000Z'
id: FACT-desktop-folder-to-tag-mappings-batch-maximum
type: fact
---
At most 25 folder-to-tag mappings can be added or removed in one request in the desktop sync client.

Modeled from REQ-desktop-folder-to-tag-mappings-batch-size so the claim can be checked for contradictions.
