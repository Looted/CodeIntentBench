---
title: client.tag_filter_shortcuts case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: client.tag_filter_shortcuts
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-96A2C08DA852320F
claim_text: two tag filter shortcuts that differ only by letter case are distinct
text_ref: REQ-client-tag-filter-shortcuts-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-160'
  recorded_at: '2026-06-25T17:39:11.000Z'
id: FACT-client-tag-filter-shortcuts-case-variants-distinct
type: fact
---
Two tag filter shortcuts that differ only by letter case are distinct.

Modeled from REQ-client-tag-filter-shortcuts-case-sensitive-names so the claim can be checked for contradictions.
