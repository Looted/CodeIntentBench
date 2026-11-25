---
title: Search query can have special characters.
status: active
semantic_text: Search query can have special characters.
semantic_clauses:
  - Search query can have special characters
logic_claims:
  - CLAIM-BC58A308FA5C9C6F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8322e20dea564e0feaa0534d079e6c6e5fcbf9c152da12f40af5134ca35b8e2d
semantic_inventory:
  - claim_key: CLAIM-BC58A308FA5C9C6F
    claim_text: Search query can have special characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-825'
  recorded_at: '2025-06-17T14:13:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-search-query-can-have-special-characters
type: req
---
Search query can have special characters.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments).

## Source

Source: Papra server behaviour notes - SRV-825
