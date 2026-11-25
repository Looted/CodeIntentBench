---
title: desktop.folder_to_tag_mappings name_trimmed = True
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-16AA09ED684921E2
claim_text: Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-desktop-folder-to-tag-mappings-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-176'
  recorded_at: '2026-08-01T08:42:41.000Z'
id: FACT-desktop-folder-to-tag-mappings-name-trimmed
type: fact
---
Folder-to-tag mapping names in the desktop sync client are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-desktop-folder-to-tag-mappings-names-trimmed so the claim can be checked for contradictions.
