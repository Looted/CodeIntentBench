---
title: Expiry:>2025-06-01 returns documents with expiry date after 2025-06-01.
status: active
semantic_text: Expiry:>2025-06-01 returns documents with expiry date after 2025-06-01.
semantic_clauses:
  - Expiry:>2025-06-01 returns documents with expiry date after 2025-06-01
logic_claims:
  - CLAIM-52D558E0D4468E2C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8fdbe230c5d4a485b76dd37581080722ba722af34c287a6ad80490e6964f318b
semantic_inventory:
  - claim_key: CLAIM-52D558E0D4468E2C
    claim_text: Expiry:>2025-06-01 returns documents with expiry date after 2025-06-01
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-789'
  recorded_at: '2026-01-19T11:50:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-expiry-2025-06-01-returns-documents-with
type: req
---
Expiry:>2025-06-01 returns documents with expiry date after 2025-06-01.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > date property).

## Source

Source: Papra server behaviour notes - SRV-789
