---
title: Provides full text search on document name, original name, and content.
status: active
semantic_text: Provides full text search on document name, original name, and content.
semantic_clauses:
  - Provides full text search on document name, original name, and content
logic_claims:
  - CLAIM-6C88902EE26E8D8A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c52880f61c24520bc9a9146022065ab4e7dd19468d20e6653798e52af8926db
semantic_inventory:
  - claim_key: CLAIM-6C88902EE26E8D8A
    claim_text: Provides full text search on document name, original name, and content
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-815'
  recorded_at: '2025-12-18T10:22:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-provides-full-text-search-on-document-name
type: req
---
Provides full text search on document name, original name, and content.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments).

## Source

Source: Papra server behaviour notes - SRV-815
