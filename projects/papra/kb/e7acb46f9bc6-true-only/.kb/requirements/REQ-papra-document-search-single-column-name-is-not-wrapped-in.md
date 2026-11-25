---
title: Single column name is not wrapped in curly braces.
status: active
semantic_text: Single column name is not wrapped in curly braces.
semantic_clauses:
  - Single column name is not wrapped in curly braces
logic_claims:
  - CLAIM-5934CAB95A66EEBD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d912e7aebca6e849b25d5e3078969ce750287c6dde9df0605f46de7c25631bcd
semantic_inventory:
  - claim_key: CLAIM-5934CAB95A66EEBD
    claim_text: Single column name is not wrapped in curly braces
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - document_search.build_fts5_column_match_term
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-741'
  recorded_at: '2026-03-07T12:00:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-single-column-name-is-not-wrapped-in
type: req
---
Single column name is not wrapped in curly braces.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.models.test.ts (database-fts5 models > buildFts5ColumnMatchTerm).

## Source

Source: Papra server behaviour notes - SRV-741
