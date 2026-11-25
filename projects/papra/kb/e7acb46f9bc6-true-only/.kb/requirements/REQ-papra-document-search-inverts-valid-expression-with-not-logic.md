---
title: Inverts a valid expression with NOT logic.
status: active
semantic_text: Inverts a valid expression with NOT logic.
semantic_clauses:
  - Inverts a valid expression with NOT logic
logic_claims:
  - CLAIM-4C66ADAF4605F88E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8982f5acb390a7f690337c355d1fe3840a5e708dc5b2be996486c1c1bf4f3415
semantic_inventory:
  - claim_key: CLAIM-4C66ADAF4605F88E
    claim_text: Inverts a valid expression with NOT logic
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - document_search.handle_not_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-940'
  recorded_at: '2026-08-27T08:07:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-inverts-valid-expression-with-not-logic
type: req
---
Inverts a valid expression with NOT logic.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleNotExpression).

## Source

Source: Papra server behaviour notes - SRV-940
