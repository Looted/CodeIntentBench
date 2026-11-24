---
title: documents.list_endpoint search_parameter = searchQuery
status: active
fact_kind: property_value
subject_key: documents.list_endpoint
property_key: search_parameter
operator: eq
value_type: string
value_string: searchQuery
claim_key: CLAIM-324A14EE28679645
claim_text: GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty
text_ref: REQ-papra-search-merged-into-documents-list
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #899: Api breaking change: removed the `/api/organizations/:organi'
  recorded_at: '2026-11-16T10:20:50.399Z'
id: FACT-papra-documents-list-endpoint-search-parameter
type: fact
---
GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty.

Modeled from REQ-papra-search-merged-into-documents-list so the claim can be checked for contradictions.
