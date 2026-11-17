---
title: A query in the `papra logs` filter is limited to 64 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the `papra logs` filter is limited to 64 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the `papra logs` filter is limited to 64 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-8D475EBF5D860019
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: db669cbeaf68bdd414df230cd77f110897179bb5789b41adfbd5e2033dc3a1fc
semantic_inventory:
  - claim_key: CLAIM-8D475EBF5D860019
    claim_text: A query in the `papra logs` filter is limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - cli.papra_logs_filter
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 113
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-178'
  recorded_at: '2026-04-10T13:00:49.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-papra-logs-filter-query-length
type: req
---
A query in the `papra logs` filter is limited to 64 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(cli): limit search query length to 64 (CLI-178)

Source: CLI design notes (packages/cli) - CLI-178
