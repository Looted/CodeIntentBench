---
title: documents.search_endpoint response_shape = documents_and_total_count
status: deprecated
fact_kind: property_value
subject_key: documents.search_endpoint
property_key: response_shape
operator: eq
value_type: string
value_string: documents_and_total_count
claim_key: CLAIM-8C63F1D71C42A703
claim_text: The document search endpoint returns complete documents and a totalCount of all matches
text_ref: REQ-papra-search-endpoint-complete-documents
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: API Breaking Change: Document search endpoint now returns co'
  recorded_at: '2026-11-16T10:31:43.270Z'
id: FACT-papra-documents-search-endpoint-response-shape-v2
type: fact
---
The document search endpoint returns complete documents and a totalCount of all matches.

Modeled from REQ-papra-search-endpoint-complete-documents so the claim can be checked for contradictions.
