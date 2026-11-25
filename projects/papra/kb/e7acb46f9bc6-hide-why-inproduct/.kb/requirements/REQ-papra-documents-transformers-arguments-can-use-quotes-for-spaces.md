---
title: Transformers arguments can use quotes for spaces.
status: active
semantic_text: Transformers arguments can use quotes for spaces.
semantic_clauses:
  - Transformers arguments can use quotes for spaces
logic_claims:
  - CLAIM-30ECCB278D5F2748
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eabde69c874e7d1f103436aa55115100fc3db7b8991871fa4710953888ae4ac2
semantic_inventory:
  - claim_key: CLAIM-30ECCB278D5F2748
    claim_text: Transformers arguments can use quotes for spaces
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1389'
  recorded_at: '2026-06-28T08:27:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-arguments-can-use-quotes-for-spaces
type: req
---
Transformers arguments can use quotes for spaces.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1389
