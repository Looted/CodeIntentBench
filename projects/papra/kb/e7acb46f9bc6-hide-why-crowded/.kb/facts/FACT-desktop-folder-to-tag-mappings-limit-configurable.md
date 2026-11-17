---
title: desktop.folder_to_tag_mappings limit_configurable = False
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-desktop-folder-to-tag-mappings-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-170'
  recorded_at: '2025-08-11T12:10:40.000Z'
id: FACT-desktop-folder-to-tag-mappings-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-desktop-folder-to-tag-mappings-maximum-count so the claim can be checked for contradictions.
