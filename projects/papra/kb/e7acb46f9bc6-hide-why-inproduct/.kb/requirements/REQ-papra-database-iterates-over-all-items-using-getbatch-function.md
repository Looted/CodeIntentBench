---
title: Iterates over all items using the getBatch function.
status: active
semantic_text: Iterates over all items using the getBatch function.
semantic_clauses:
  - Iterates over all items using the getBatch function
logic_claims:
  - CLAIM-0FCB5DFD3410D3A5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b93f7eb638693a5ab04639272accee09960ea2e6382754b9f9d773e27ec0a112
semantic_inventory:
  - claim_key: CLAIM-0FCB5DFD3410D3A5
    claim_text: Iterates over all items using the getBatch function
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - database.create_batched_iterator
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-535'
  recorded_at: '2025-08-28T10:44:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:database
id: REQ-papra-database-iterates-over-all-items-using-getbatch-function
type: req
---
Iterates over all items using the getBatch function.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/database/database.usecases.test.ts (database usecases > createBatchedIterator).

## Source

Source: Papra server behaviour notes - SRV-535
