---
title: documents.search_endpoint response_shape = search_results_documents
status: deprecated
fact_kind: property_value
subject_key: documents.search_endpoint
property_key: response_shape
operator: eq
value_type: string
value_string: search_results_documents
claim_key: CLAIM-DC5F3B8FB793F92E
claim_text: The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents
text_ref: REQ-papra-search-endpoint-nested-results
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #650: Api breaking change: the document search endpoint return for'
  recorded_at: '2026-11-25T19:27:42.247Z'
id: FACT-papra-documents-search-endpoint-response-shape-v1
type: fact
---
The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents.

Modeled from REQ-papra-search-endpoint-nested-results so the claim can be checked for contradictions.
