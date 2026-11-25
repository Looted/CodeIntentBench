---
title: Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators.
status: active
semantic_text: Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators.
semantic_clauses:
  - Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators
logic_claims:
  - CLAIM-4592A872FA575CFF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa05a7a92383794788822e5deea30be46175d4811f38e866c1a4208b328280ea
semantic_inventory:
  - claim_key: CLAIM-4592A872FA575CFF
    claim_text: Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-879'
  recorded_at: '2025-10-23T10:11:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-returns-unsupported-filter-operator-issue
type: req
---
Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-879
