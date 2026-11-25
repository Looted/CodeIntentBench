---
title: No SQL query builder provided means empty query and params.
status: active
semantic_text: No SQL query builder provided means empty query and params.
semantic_clauses:
  - No SQL query builder provided means empty query and params
logic_claims:
  - CLAIM-D1A69245A764B9D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8e6253192e81021ca2e3757932ddf1bc9c28fd6924aa16a776bc3621e25ba121
semantic_inventory:
  - claim_key: CLAIM-D1A69245A764B9D4
    claim_text: No SQL query builder provided means empty query and params
    role: definition
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - database.stringify_sql_query
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-527'
  recorded_at: '2025-06-28T08:42:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:database
id: REQ-papra-database-no-sql-query-builder-provided-means-empty
type: req
---
No SQL query builder provided means empty query and params.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/database/database.models.test.ts (database.models > stringifySqlQuery).

## Source

Source: Papra server behaviour notes - SRV-527
