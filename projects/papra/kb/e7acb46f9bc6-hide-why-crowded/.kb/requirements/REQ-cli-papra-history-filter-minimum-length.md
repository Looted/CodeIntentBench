---
title: The `papra history` filter runs only once the query has at least 3 characters.
status: active
semantic_text: The `papra history` filter runs only once the query has at least 3 characters.
semantic_clauses:
  - The `papra history` filter runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-6F361668171E56F7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 351a8afa0f7f76b53696d7c925d4688647f4b024c1ace042e17b42a392f15484
semantic_inventory:
  - claim_key: CLAIM-6F361668171E56F7
    claim_text: The `papra history` filter runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - cli.papra_history_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-210'
  recorded_at: '2025-07-10T13:33:21.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-cli-papra-history-filter-minimum-length
type: req
---
The `papra history` filter runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(cli): minimum query length 3 (CLI-210)

Source: CLI design notes (packages/cli) - CLI-210
