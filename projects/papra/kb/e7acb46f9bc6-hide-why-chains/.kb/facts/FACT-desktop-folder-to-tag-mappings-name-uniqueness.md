---
title: desktop.folder_to_tag_mappings name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-21EB70F9DB530204
claim_text: Folder-to-tag mappings in the desktop sync client are compared exactly as typed
text_ref: REQ-desktop-folder-to-tag-mappings-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-167'
  recorded_at: '2025-03-09T12:09:31.000Z'
id: FACT-desktop-folder-to-tag-mappings-name-uniqueness
type: fact
---
Folder-to-tag mappings in the desktop sync client are compared exactly as typed.

Modeled from REQ-desktop-folder-to-tag-mappings-case-sensitive-names so the claim can be checked for contradictions.
