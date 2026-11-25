---
title: Is a no-op when called with an empty list.
status: active
semantic_text: Is a no-op when called with an empty list.
semantic_clauses:
  - Is a no-op when called with an empty list
logic_claims:
  - CLAIM-4F5271320873B7C4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4495ad483add8db20ea2afc72100419b5e3f314dd77ac7e68da11605177d8e5c
semantic_inventory:
  - claim_key: CLAIM-4F5271320873B7C4
    claim_text: Is a no-op when called with an empty list
    role: normative
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - document_search.index_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-803'
  recorded_at: '2025-04-08T13:42:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-is-no-op-when-called-with-empty
type: req
---
Is a no-op when called with an empty list.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > indexDocuments).

## Source

Source: Papra server behaviour notes - SRV-803
