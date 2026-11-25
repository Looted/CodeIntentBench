---
title: Works with raw SQL query builder.
status: active
semantic_text: Works with raw SQL query builder.
semantic_clauses:
  - Works with raw SQL query builder
logic_claims:
  - CLAIM-9879ABA2C56A6B55
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5fc474884368c0465c4cb1429c8280e630b4928e55407dca87d017259f99dc78
semantic_inventory:
  - claim_key: CLAIM-9879ABA2C56A6B55
    claim_text: Works with raw SQL query builder
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 32
    subjects:
      - database.stringify_sql_query
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-530'
  recorded_at: '2026-08-09T14:13:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:database
id: REQ-papra-database-works-with-raw-sql-query-builder
type: req
---
Works with raw SQL query builder.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/database/database.models.test.ts (database.models > stringifySqlQuery).

## Source

Source: Papra server behaviour notes - SRV-530
