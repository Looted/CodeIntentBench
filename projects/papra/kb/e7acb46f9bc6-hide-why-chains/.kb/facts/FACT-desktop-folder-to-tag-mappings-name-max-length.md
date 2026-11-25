---
title: desktop.folder_to_tag_mappings name_max_length = 24
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: name_max_length
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-7BCF87A03765F9CD
claim_text: Folder-to-tag mapping names in the desktop sync client are limited to 24 characters
text_ref: REQ-desktop-folder-to-tag-mappings-name-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-171'
  recorded_at: '2025-11-16T15:35:30.000Z'
id: FACT-desktop-folder-to-tag-mappings-name-max-length
type: fact
---
Folder-to-tag mapping names in the desktop sync client are limited to 24 characters.

Modeled from REQ-desktop-folder-to-tag-mappings-name-length so the claim can be checked for contradictions.
