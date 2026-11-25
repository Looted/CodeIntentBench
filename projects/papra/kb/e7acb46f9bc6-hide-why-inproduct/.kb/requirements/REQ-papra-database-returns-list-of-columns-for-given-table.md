---
title: Returns the list of columns for a given table.
status: active
semantic_text: Returns the list of columns for a given table.
semantic_clauses:
  - Returns the list of columns for a given table
logic_claims:
  - CLAIM-9E389B2D39A641BE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e867e123627a053680529c1c53f63ee745b55c5f04a9f1232db89ffd0326c956
semantic_inventory:
  - claim_key: CLAIM-9E389B2D39A641BE
    claim_text: Returns the list of columns for a given table
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - database.get_runtime_table_columns
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-539'
  recorded_at: '2025-09-28T14:46:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:database
id: REQ-papra-database-returns-list-of-columns-for-given-table
type: req
---
Returns the list of columns for a given table.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/database/database.usecases.test.ts (database usecases > getRuntimeTableColumns).

## Source

Source: Papra server behaviour notes - SRV-539
