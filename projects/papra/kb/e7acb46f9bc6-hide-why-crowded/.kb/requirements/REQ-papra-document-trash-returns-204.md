---
title: Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body.
status: active
semantic_text: Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body.
semantic_clauses:
  - Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body
logic_claims:
  - CLAIM-5F86B7C26DD2BE64
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 31a70667d2ae7e97393f7d2da9497ee8664edec7bee244adc2e7f27c8ecd1029
semantic_inventory:
  - claim_key: CLAIM-5F86B7C26DD2BE64
    claim_text: Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - documents.trash_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1474: API breaking change: The route to trash a document `DELETE /'
  recorded_at: '2026-11-16T13:17:22.742Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:documents
id: REQ-papra-document-trash-returns-204
type: req
---
Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body.

## Context

Reason not stated.

## Source

> API breaking change: The route to trash a document `DELETE /api/organizations/:organizationId/documents/:documentId` now returns a 204 No Content status code instead of `{ success: true }` JSON body.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.7.0 changelog, #1474: API breaking change: The route to trash a document `DELETE /
