---
title: An unknown sort field is rejected.
status: active
semantic_text: An unknown sort field is rejected.
semantic_clauses:
  - An unknown sort field is rejected
logic_claims:
  - CLAIM-845813DACA863700
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6e2e0bc78b9493485b2ad234208eb89d98c2b974cd5562ae811228aa4c7cc4cf
semantic_inventory:
  - claim_key: CLAIM-845813DACA863700
    claim_text: An unknown sort field is rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 33
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1239'
  recorded_at: '2025-03-20T17:16:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-unknown-sort-field-is-rejected
type: req
---
An unknown sort field is rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/list-documents-sorting.e2e.test.ts (documents e2e > list documents sorting).

## Source

Source: Papra server behaviour notes - SRV-1239
