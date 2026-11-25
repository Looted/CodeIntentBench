---
title: Propagates issues from nested expression when negating.
status: active
semantic_text: Propagates issues from nested expression when negating.
semantic_clauses:
  - Propagates issues from nested expression when negating
logic_claims:
  - CLAIM-B207A2CA96BA69F0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee5c367a45b4fa431cd7a307f6ee2bb6f0b1f12e91dd472143299472f3940f13
semantic_inventory:
  - claim_key: CLAIM-B207A2CA96BA69F0
    claim_text: Propagates issues from nested expression when negating
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - document_search.handle_not_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-948'
  recorded_at: '2026-09-03T14:22:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-propagates-issues-from-nested-expression-when-negating
type: req
---
Propagates issues from nested expression when negating.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleNotExpression).

## Source

Source: Papra server behaviour notes - SRV-948
