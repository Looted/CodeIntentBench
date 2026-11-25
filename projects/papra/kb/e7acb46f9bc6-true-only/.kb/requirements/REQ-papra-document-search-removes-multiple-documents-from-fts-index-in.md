---
title: Removes multiple documents from the FTS index in a single call.
status: active
semantic_text: Removes multiple documents from the FTS index in a single call.
semantic_clauses:
  - Removes multiple documents from the FTS index in a single call
logic_claims:
  - CLAIM-505CD96EA09BA8A6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dcea5abd42a91d69f97f7d69e3dacfce3735b26a45d1e19e4890638eafffbb39
semantic_inventory:
  - claim_key: CLAIM-505CD96EA09BA8A6
    claim_text: Removes multiple documents from the FTS index in a single call
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - document_search.delete_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-821'
  recorded_at: '2025-04-24T12:58:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-removes-multiple-documents-from-fts-index-in
type: req
---
Removes multiple documents from the FTS index in a single call.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > deleteDocuments).

## Source

Source: Papra server behaviour notes - SRV-821
