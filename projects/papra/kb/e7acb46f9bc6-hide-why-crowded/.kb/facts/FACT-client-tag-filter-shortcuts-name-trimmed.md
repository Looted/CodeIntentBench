---
title: client.tag_filter_shortcuts name_trimmed = True
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1A5A56A61FF4E7AE
claim_text: Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-client-tag-filter-shortcuts-names-trimmed
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-167'
  recorded_at: '2025-09-25T10:21:11.000Z'
id: FACT-client-tag-filter-shortcuts-name-trimmed
type: fact
---
Tag filter shortcut names in the web client are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-client-tag-filter-shortcuts-names-trimmed so the claim can be checked for contradictions.
