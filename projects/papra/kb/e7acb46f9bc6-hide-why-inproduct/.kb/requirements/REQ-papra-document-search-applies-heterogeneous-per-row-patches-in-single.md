---
title: Applies heterogeneous per-row patches in a single call.
status: active
semantic_text: Applies heterogeneous per-row patches in a single call.
semantic_clauses:
  - Applies heterogeneous per-row patches in a single call
logic_claims:
  - CLAIM-D67E5ED20B846E83
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 76c97aa247828fcefd3a4d196b5ed5730c5936f82512a6d1e7011c6d75bb8102
semantic_inventory:
  - claim_key: CLAIM-D67E5ED20B846E83
    claim_text: Applies heterogeneous per-row patches in a single call
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - document_search.update_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-762'
  recorded_at: '2026-04-11T15:09:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-applies-heterogeneous-per-row-patches-in-single
type: req
---
Applies heterogeneous per-row patches in a single call.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > updateDocuments).

## Source

Source: Papra server behaviour notes - SRV-762
