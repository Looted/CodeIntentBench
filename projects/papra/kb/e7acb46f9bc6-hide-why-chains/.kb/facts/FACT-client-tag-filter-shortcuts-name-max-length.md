---
title: client.tag_filter_shortcuts name_max_length = 40
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: name_max_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-D907164B7254398F
claim_text: Tag filter shortcut names in the web client are limited to 40 characters
text_ref: REQ-client-tag-filter-shortcuts-name-length
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-166'
  recorded_at: '2026-02-01T15:59:32.000Z'
id: FACT-client-tag-filter-shortcuts-name-max-length
type: fact
---
Tag filter shortcut names in the web client are limited to 40 characters.

Modeled from REQ-client-tag-filter-shortcuts-name-length so the claim can be checked for contradictions.
