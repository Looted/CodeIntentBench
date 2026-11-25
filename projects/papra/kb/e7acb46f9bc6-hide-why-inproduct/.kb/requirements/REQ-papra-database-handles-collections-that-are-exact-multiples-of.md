---
title: Handles collections that are exact multiples of batch size.
status: active
semantic_text: Handles collections that are exact multiples of batch size.
semantic_clauses:
  - Handles collections that are exact multiples of batch size
logic_claims:
  - CLAIM-BD3A817278998D82
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8ff0cab3dfefa5b88d2bd05dae7f011d96aff38bc199027d0a0937d8fc3d5e9d
semantic_inventory:
  - claim_key: CLAIM-BD3A817278998D82
    claim_text: Handles collections that are exact multiples of batch size
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - database.create_batched_iterator
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-532'
  recorded_at: '2025-02-25T10:36:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:database
id: REQ-papra-database-handles-collections-that-are-exact-multiples-of
type: req
---
Handles collections that are exact multiples of batch size.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/database/database.usecases.test.ts (database usecases > createBatchedIterator).

## Source

Source: Papra server behaviour notes - SRV-532
