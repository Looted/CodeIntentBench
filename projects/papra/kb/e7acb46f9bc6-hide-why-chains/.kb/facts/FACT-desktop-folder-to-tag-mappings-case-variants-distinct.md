---
title: desktop.folder_to_tag_mappings case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: desktop.folder_to_tag_mappings
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CDA2154C77514105
claim_text: two folder-to-tag mappings that differ only by letter case are distinct
text_ref: REQ-desktop-folder-to-tag-mappings-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-167'
  recorded_at: '2025-03-09T12:09:31.000Z'
id: FACT-desktop-folder-to-tag-mappings-case-variants-distinct
type: fact
---
Two folder-to-tag mappings that differ only by letter case are distinct.

Modeled from REQ-desktop-folder-to-tag-mappings-case-sensitive-names so the claim can be checked for contradictions.
