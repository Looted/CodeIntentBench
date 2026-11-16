---
title: documents.trash_response status_code = 204
status: active
fact_kind: property_value
subject_key: documents.trash_response
property_key: status_code
operator: eq
value_type: int
value_int: 204
claim_key: CLAIM-5F86B7C26DD2BE64
claim_text: Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body
text_ref: REQ-papra-document-trash-returns-204
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1474: API breaking change: The route to trash a document `DELETE /'
  recorded_at: '2026-11-16T13:17:21.912Z'
id: FACT-papra-documents-trash-response-status-code
type: fact
---
Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body.

Modeled from REQ-papra-document-trash-returns-204 so the claim can be checked for contradictions.
