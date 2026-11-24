---
title: desktop.folder_to_tag_mappings empty_name_refused = True
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-desktop-folder-to-tag-mappings-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-176'
  recorded_at: '2026-08-01T08:42:41.000Z'
id: FACT-desktop-folder-to-tag-mappings-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-desktop-folder-to-tag-mappings-names-trimmed so the claim can be checked for contradictions.
