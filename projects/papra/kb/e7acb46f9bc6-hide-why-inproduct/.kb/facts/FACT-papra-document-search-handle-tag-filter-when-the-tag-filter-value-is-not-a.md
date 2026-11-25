---
title: document_search.handle_tag_filter when_the_tag_filter_value_is_not_a = True
status: active
fact_kind: property_value
subject_key: document_search.handle_tag_filter
property_key: when_the_tag_filter_value_is_not_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-719A927305424986
claim_text: When the tag filter value is not a proper tag id, the built query matches by name
text_ref: REQ-papra-document-search-tag-filter-value-is-not-proper-tag
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-966'
  recorded_at: '2025-08-22T12:24:07.000Z'
id: FACT-papra-document-search-handle-tag-filter-when-the-tag-filter-value-is-not-a
type: fact
---
When the tag filter value is not a proper tag id, the built query matches by name.

Modeled from REQ-papra-document-search-tag-filter-value-is-not-proper-tag so the claim can be checked for contradictions.
