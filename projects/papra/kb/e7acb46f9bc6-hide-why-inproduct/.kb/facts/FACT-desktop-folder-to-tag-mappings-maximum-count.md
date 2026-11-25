---
title: desktop.folder_to_tag_mappings maximum_count = 25
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-0EB07B7CC83B6983
claim_text: At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client
text_ref: REQ-desktop-folder-to-tag-mappings-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-170'
  recorded_at: '2025-08-11T12:10:40.000Z'
id: FACT-desktop-folder-to-tag-mappings-maximum-count
type: fact
---
At most 25 folder-to-tag mappings can be created per sync folder in the desktop sync client.

Modeled from REQ-desktop-folder-to-tag-mappings-maximum-count so the claim can be checked for contradictions.
