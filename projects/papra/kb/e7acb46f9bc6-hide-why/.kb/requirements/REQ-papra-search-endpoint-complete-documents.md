---
title: The document search endpoint returns complete documents and a totalCount of all matches; it no longer nests results under searchResults.
status: closed
semantic_text: The document search endpoint returns complete documents and a totalCount of all matches; it no longer nests results under searchResults.
semantic_clauses:
  - The document search endpoint returns complete documents and a totalCount of all matches
  - it no longer nests results under searchResults
logic_claims:
  - CLAIM-8C63F1D71C42A703
  - CLAIM-89C9A55F0DE79E1B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 62c3556e3a553d49c4bcb5a867817e6b7bd454393be7e12b4d1a8418403c86d1
semantic_inventory:
  - claim_key: CLAIM-8C63F1D71C42A703
    claim_text: The document search endpoint returns complete documents and a totalCount of all matches
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - documents.search_endpoint
  - claim_key: CLAIM-89C9A55F0DE79E1B
    claim_text: it no longer nests results under searchResults
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 135
    subjects:
      - documents.search_endpoint
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #758: API Breaking Change: Document search endpoint now returns co'
  recorded_at: '2026-11-16T13:17:45.208Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-search-endpoint-complete-documents
type: req
---
The document search endpoint returns complete documents and a totalCount of all matches; it no longer nests results under searchResults.

## Context

Reason not stated.

## Why this changed

Reason not stated. The changeset of #758 (2026-01-18) replaces the earlier behaviour without saying why it changed.

## Source

> API Breaking Change: Document search endpoint now returns complete documents along with total count matching the search query, and no longer nests results under `searchResults`. Before: ```ts // GET /api/organizations/:organizationId/documents/search?searchQuery=foobar { searchResults: { documents: [ { id: 'doc_1', name: 'Document 1.pdf' }, { id: 'doc_2', name: 'Document 2.pdf' }, ], }, } ``` After: ```ts // GET /api/organizations/:organizationId/documents/search?searchQuery=foobar { documents: [ { id: 'doc_1', name: 'Document 1.pdf', mimeType: 'application/pdf' /* ...otherProps */ }, { id: 'doc_2', name: 'Document 2.pdf', mimeType: 'application/pdf' /* ...otherProps */ }, ], totalCount: 42, } ```

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.0.0 changelog, #758: API Breaking Change: Document search endpoint now returns co
