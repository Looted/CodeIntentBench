---
title: Unclosed quotes are accepted and considered part of the argument.
status: active
semantic_text: Unclosed quotes are accepted and considered part of the argument.
semantic_clauses:
  - Unclosed quotes are accepted and considered part of the argument
logic_claims:
  - CLAIM-F394D6B3241BC37E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1de4c8ea6182619ef2e457e28240daa9eaa0490bd92c793e759d4e7fc5cfd9ce
semantic_inventory:
  - claim_key: CLAIM-F394D6B3241BC37E
    claim_text: Unclosed quotes are accepted and considered part of the argument
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1401'
  recorded_at: '2025-09-05T14:47:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-unclosed-quotes-are-accepted-and-considered-part
type: req
---
Unclosed quotes are accepted and considered part of the argument.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1401
