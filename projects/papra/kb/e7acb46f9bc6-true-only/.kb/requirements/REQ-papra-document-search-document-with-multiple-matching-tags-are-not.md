---
title: Document with multiple matching tags are not double-counted.
status: active
semantic_text: Document with multiple matching tags are not double-counted.
semantic_clauses:
  - Document with multiple matching tags are not double-counted
logic_claims:
  - CLAIM-9A0FB2EF4DB6EFC6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3b9ef70e84dceffe5f50bdb3493872808fe8bc6155f31e10c0d8aee94b0fde8e
semantic_inventory:
  - claim_key: CLAIM-9A0FB2EF4DB6EFC6
    claim_text: Document with multiple matching tags are not double-counted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-774'
  recorded_at: '2026-01-01T09:18:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-document-with-multiple-matching-tags-are-not
type: req
---
Document with multiple matching tags are not double-counted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > documents count).

## Source

Source: Papra server behaviour notes - SRV-774
