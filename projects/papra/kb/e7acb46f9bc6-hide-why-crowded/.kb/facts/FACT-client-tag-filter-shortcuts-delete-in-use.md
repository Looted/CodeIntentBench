---
title: client.tag_filter_shortcuts delete_in_use = detached
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-BFEE0F0CC7F1F622
claim_text: Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use
text_ref: REQ-client-tag-filter-shortcuts-delete-in-use
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-174'
  recorded_at: '2025-06-05T11:24:12.000Z'
id: FACT-client-tag-filter-shortcuts-delete-in-use
type: fact
---
Deleting a tag filter shortcut in the web client removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-client-tag-filter-shortcuts-delete-in-use so the claim can be checked for contradictions.
