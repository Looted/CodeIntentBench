---
title: 'The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
status: active
semantic_text: 'The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
semantic_clauses:
  - 'The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
logic_claims:
  - CLAIM-FC56B7622CB9846F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 37ca2e00c6409409f97a7c715d28dcb4a6a6722190e1e0a86fac1da4caff0af8
semantic_inventory:
  - claim_key: CLAIM-FC56B7622CB9846F
    claim_text: 'The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - cli.papra_history_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-226'
  recorded_at: '2025-10-25T08:10:54.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-cli-papra-history-filter-date-format
type: req
---
The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(cli): date formats of the ran: filter (CLI-226)

Source: CLI design notes (packages/cli) - CLI-226
