---
title: The matching columns can be customized.
status: active
semantic_text: The matching columns can be customized.
semantic_clauses:
  - The matching columns can be customized
logic_claims:
  - CLAIM-BD264D70C52B11A9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a08fae370dd5e4e5acbde5385d38b8ab06efbd2f5dbad3c5488763cd00cdd80b
semantic_inventory:
  - claim_key: CLAIM-BD264D70C52B11A9
    claim_text: The matching columns can be customized
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 38
    subjects:
      - document_search.format_fts5_query_value
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-920'
  recorded_at: '2026-06-02T09:51:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-matching-columns-can-be-customized
type: req
---
The matching columns can be customized.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.models.test.ts (query-builder models > formatFts5QueryValue).

## Source

Source: Papra server behaviour notes - SRV-920
