---
title: Patterns can have spaces around expressions.
status: active
semantic_text: Patterns can have spaces around expressions.
semantic_clauses:
  - Patterns can have spaces around expressions
logic_claims:
  - CLAIM-E44750D26124F49E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d78e54fdc08a8230fe92f7b85d503c757bccf6b6669f8fcb76a8433a494cfeef
semantic_inventory:
  - claim_key: CLAIM-E44750D26124F49E
    claim_text: Patterns can have spaces around expressions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1378'
  recorded_at: '2025-06-27T12:38:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-patterns-can-have-spaces-around-expressions
type: req
---
Patterns can have spaces around expressions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1378
