---
title: The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc); the documents page sorts by creation date by de…
status: closed
semantic_text: The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc); the documents page sorts by creation date by default.
semantic_clauses:
  - The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc)
  - the documents page sorts by creation date by default
logic_claims:
  - CLAIM-62EEE0716B11D745
  - CLAIM-C82EAB88C3EECA25
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 570d78e0a1ed8587dedceb511fec18df29261b99ce2121b8e8aad18304f69e10
semantic_inventory:
  - claim_key: CLAIM-62EEE0716B11D745
    claim_text: The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - documents.sort
  - claim_key: CLAIM-C82EAB88C3EECA25
    claim_text: the documents page sorts by creation date by default
    role: descriptive
    status: modeled
    span:
      start: 110
      end: 162
    subjects:
      - documents.sort
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1089: Added `sortField` and `sortOrder` query parameters to the do'
  recorded_at: '2026-11-16T10:31:57.303Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-document-sort-parameters
type: req
---
The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc); the documents page sorts by creation date by default.

## Context

Reason not stated.

## Source

> Added `sortField` and `sortOrder` query parameters to the document list/search endpoint (`GET /api/organizations/:organizationId/documents`), allowing documents to be sorted by `createdAt`, `updatedAt`, `name`, or `documentDate` in ascending or descending order.
> Added sorting option in the documents list, allowing to sort documents by name, or creation date, in ascending or descending order.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1089: Added `sortField` and `sortOrder` query parameters to the do
