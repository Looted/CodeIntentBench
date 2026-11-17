---
title: desktop.folder_to_tag_mappings delete_in_use = detached
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-AC4FA60B0E163C8C
claim_text: Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use
text_ref: REQ-desktop-folder-to-tag-mappings-delete-in-use
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-182'
  recorded_at: '2025-02-08T15:34:40.000Z'
id: FACT-desktop-folder-to-tag-mappings-delete-in-use
type: fact
---
Deleting a folder-to-tag mapping in the desktop sync client removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-desktop-folder-to-tag-mappings-delete-in-use so the claim can be checked for contradictions.
