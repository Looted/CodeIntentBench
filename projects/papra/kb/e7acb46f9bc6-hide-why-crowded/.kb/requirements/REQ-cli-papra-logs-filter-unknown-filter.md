---
title: A filter name that the `papra logs` filter does not know is treated as plain search text.
status: active
semantic_text: A filter name that the `papra logs` filter does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the `papra logs` filter does not know is treated as plain search text
logic_claims:
  - CLAIM-526340A43FEC6821
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f433d5f00ed28d940f5c313a9adf5d44c8de270004216e2baa35b3dbfa28d6ba
semantic_inventory:
  - claim_key: CLAIM-526340A43FEC6821
    claim_text: A filter name that the `papra logs` filter does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-200'
  recorded_at: '2026-09-11T08:46:47.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: A mistyped filter name silently widened the search.
id: REQ-cli-papra-logs-filter-unknown-filter
type: req
---
A filter name that the `papra logs` filter does not know is treated as plain search text.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(cli): unknown search filters (CLI-200)

Source: CLI design notes (packages/cli) - CLI-200
