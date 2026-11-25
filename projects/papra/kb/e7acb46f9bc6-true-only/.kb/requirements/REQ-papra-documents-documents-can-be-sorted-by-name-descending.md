---
title: Documents can be sorted by name descending.
status: active
semantic_text: Documents can be sorted by name descending.
semantic_clauses:
  - Documents can be sorted by name descending
logic_claims:
  - CLAIM-59C2E4635F264735
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2b99e8fa316b7be6fb5815764e8a030b2085ccc5e55806f0c8271b1b2a97550e
semantic_inventory:
  - claim_key: CLAIM-59C2E4635F264735
    claim_text: Documents can be sorted by name descending
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1246'
  recorded_at: '2025-07-17T15:59:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-documents-can-be-sorted-by-name-descending
type: req
---
Documents can be sorted by name descending.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/list-documents-sorting.e2e.test.ts (documents e2e > list documents sorting).

## Source

Source: Papra server behaviour notes - SRV-1246
