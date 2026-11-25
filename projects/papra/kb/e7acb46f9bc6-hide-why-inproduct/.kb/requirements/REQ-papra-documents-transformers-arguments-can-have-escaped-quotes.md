---
title: Transformers arguments can have escaped quotes.
status: active
semantic_text: Transformers arguments can have escaped quotes.
semantic_clauses:
  - Transformers arguments can have escaped quotes
logic_claims:
  - CLAIM-FF272C381D5C8ECC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bfdf137172743855d16473b4c863f1723f2e6feccf596d8494da21e9909e95f0
semantic_inventory:
  - claim_key: CLAIM-FF272C381D5C8ECC
    claim_text: Transformers arguments can have escaped quotes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1388'
  recorded_at: '2026-06-20T12:18:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-arguments-can-have-escaped-quotes
type: req
---
Transformers arguments can have escaped quotes.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1388
