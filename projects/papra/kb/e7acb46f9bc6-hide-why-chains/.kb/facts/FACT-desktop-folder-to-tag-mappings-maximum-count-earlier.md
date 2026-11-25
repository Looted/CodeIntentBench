---
title: desktop.folder_to_tag_mappings maximum_count = 10
status: deprecated
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-24A3044FAC0F93F4
claim_text: At most 10 folder-to-tag mappings can be created per sync folder in the desktop sync client
text_ref: REQ-desktop-folder-to-tag-mappings-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-115'
  recorded_at: '2025-04-14T12:46:59.000Z'
id: FACT-desktop-folder-to-tag-mappings-maximum-count-earlier
type: fact
---
At most 10 folder-to-tag mappings can be created per sync folder in the desktop sync client.

Modeled from REQ-desktop-folder-to-tag-mappings-maximum-count-earlier so the claim can be checked for contradictions.
