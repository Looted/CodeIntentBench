---
title: documents.search_endpoint nests_under_search_results = False
status: deprecated
fact_kind: property_value
subject_key: documents.search_endpoint
property_key: nests_under_search_results
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-89C9A55F0DE79E1B
claim_text: it no longer nests results under searchResults
text_ref: REQ-papra-search-endpoint-complete-documents
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: API Breaking Change: Document search endpoint now returns co'
  recorded_at: '2026-11-16T13:17:44.346Z'
id: FACT-papra-documents-search-endpoint-nests-under-search-results-v2
type: fact
---
It no longer nests results under searchResults.

Modeled from REQ-papra-search-endpoint-complete-documents so the claim can be checked for contradictions.
