---
title: Removes a document from the FTS index and makes it unsearchable.
status: active
semantic_text: Removes a document from the FTS index and makes it unsearchable.
semantic_clauses:
  - Removes a document from the FTS index and makes it unsearchable
logic_claims:
  - CLAIM-7E5D75DB532AE472
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a6c28224a2064dc49682ef93649249476647dd02c0c5127065204ef36cd41dfa
semantic_inventory:
  - claim_key: CLAIM-7E5D75DB532AE472
    claim_text: Removes a document from the FTS index and makes it unsearchable
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - document_search.delete_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-818'
  recorded_at: '2026-02-27T15:54:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-removes-document-from-fts-index-and-makes
type: req
---
Removes a document from the FTS index and makes it unsearchable.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > deleteDocuments).

## Source

Source: Papra server behaviour notes - SRV-818
