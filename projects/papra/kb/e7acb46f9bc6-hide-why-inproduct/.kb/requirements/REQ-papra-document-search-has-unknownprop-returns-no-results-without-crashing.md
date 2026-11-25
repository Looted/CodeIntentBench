---
title: Has:unknownprop returns no results without crashing.
status: active
semantic_text: Has:unknownprop returns no results without crashing.
semantic_clauses:
  - Has:unknownprop returns no results without crashing
logic_claims:
  - CLAIM-FF7172F0AB6F3C0E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29d8ed103db97f0e603b04ebaf7860f5827f423491f3a2d0dca7fa5d52aaeec6
semantic_inventory:
  - claim_key: CLAIM-FF7172F0AB6F3C0E
    claim_text: Has:unknownprop returns no results without crashing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-790'
  recorded_at: '2026-01-14T17:10:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-has-unknownprop-returns-no-results-without-crashing
type: req
---
Has:unknownprop returns no results without crashing.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > has: filter for custom properties).

## Source

Source: Papra server behaviour notes - SRV-790
