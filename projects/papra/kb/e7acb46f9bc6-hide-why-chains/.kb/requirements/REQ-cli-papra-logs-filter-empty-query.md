---
title: An empty query in the `papra logs` filter is not sent.
status: active
semantic_text: An empty query in the `papra logs` filter is not sent.
semantic_clauses:
  - An empty query in the `papra logs` filter is not sent
logic_claims:
  - CLAIM-900009E549509DBA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 216454b30d1bd29ef91577e68b6b9545725709c8d206926e4db020ff1b79b9ae
semantic_inventory:
  - claim_key: CLAIM-900009E549509DBA
    claim_text: An empty query in the `papra logs` filter is not sent
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-201'
  recorded_at: '2026-02-19T14:00:51.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-papra-logs-filter-empty-query
type: req
---
An empty query in the `papra logs` filter is not sent.

## Context

Reason not stated.

## Source

> feat(cli): empty search query (CLI-201)

Source: CLI design notes (packages/cli) - CLI-201
