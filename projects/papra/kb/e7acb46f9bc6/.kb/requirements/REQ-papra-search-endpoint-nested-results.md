---
title: The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents; each result carries o…
status: closed
semantic_text: The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents; each result carries only the document id and name.
semantic_clauses:
  - The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents
  - each result carries only the document id and name
logic_claims:
  - CLAIM-DC5F3B8FB793F92E
  - CLAIM-E1C5AA855DDF24D3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5dfa370aa81d35f3c71b2bc5238c153b9ee4d43fbe91ee7f34e4317387b1f440
semantic_inventory:
  - claim_key: CLAIM-DC5F3B8FB793F92E
    claim_text: The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 134
    subjects:
      - documents.search_endpoint
  - claim_key: CLAIM-E1C5AA855DDF24D3
    claim_text: each result carries only the document id and name
    role: descriptive
    status: modeled
    span:
      start: 136
      end: 185
    subjects:
      - documents.search_endpoint
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #650: Api breaking change: the document search endpoint return for'
  recorded_at: '2026-11-16T10:20:40.718Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-search-endpoint-nested-results
type: req
---
The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents; each result carries only the document id and name.

## Context

Reason not stated.

## Source

> Api breaking change: the document search endpoint return format changed, impacting any custom clients consuming it. Before ```ts // Get /api/organizations/:organizationId/documents/search { documents: { id: string; name: string; mimeType: string; // ... other document fields } []; } ``` After ```ts // Get /api/organizations/:organizationId/documents/search { searchResults: { documents: { id: string; name: string; } []; } } ```

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.11.0 changelog, #650: Api breaking change: the document search endpoint return for
