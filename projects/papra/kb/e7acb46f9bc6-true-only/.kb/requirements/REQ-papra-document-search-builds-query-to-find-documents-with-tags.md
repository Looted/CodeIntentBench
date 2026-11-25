---
title: Builds query to find documents with tags.
status: active
semantic_text: Builds query to find documents with tags.
semantic_clauses:
  - Builds query to find documents with tags
logic_claims:
  - CLAIM-E287B2322A106E48
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fecc01e12bf2147c9e9ecb0e015689cb8102d93d810d9036a5ba3fa065488ac7
semantic_inventory:
  - claim_key: CLAIM-E287B2322A106E48
    claim_text: Builds query to find documents with tags
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - document_search.handle_has_tags_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-925'
  recorded_at: '2025-08-02T12:43:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-builds-query-to-find-documents-with-tags
type: req
---
Builds query to find documents with tags.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleHasTagsFilter).

## Source

Source: Papra server behaviour notes - SRV-925
