---
title: The `papra logs` filter runs only once the query has at least 1 character.
status: active
semantic_text: The `papra logs` filter runs only once the query has at least 1 character.
semantic_clauses:
  - The `papra logs` filter runs only once the query has at least 1 character
logic_claims:
  - CLAIM-1AEDF0BA0F749A88
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7bedc5c6c95166009c87265a99ee0fd4999d41a0e5ac335827dcda75b60aae0
semantic_inventory:
  - claim_key: CLAIM-1AEDF0BA0F749A88
    claim_text: The `papra logs` filter runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-185'
  recorded_at: '2026-05-22T15:13:57.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-cli-papra-logs-filter-minimum-length
type: req
---
The `papra logs` filter runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(cli): minimum query length 1 (CLI-185)

Source: CLI design notes (packages/cli) - CLI-185
