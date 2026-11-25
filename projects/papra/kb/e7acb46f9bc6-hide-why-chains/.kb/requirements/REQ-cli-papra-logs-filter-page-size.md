---
title: The `papra logs` filter returns at most 30 results per page.
status: active
semantic_text: The `papra logs` filter returns at most 30 results per page.
semantic_clauses:
  - The `papra logs` filter returns at most 30 results per page
logic_claims:
  - CLAIM-ABE9D66ECD788DE9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 565bf69e30649ac10b32c8da03b6fd5c80998ed1fb355cfd9a346972f55b27fb
semantic_inventory:
  - claim_key: CLAIM-ABE9D66ECD788DE9
    claim_text: The `papra logs` filter returns at most 30 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-188'
  recorded_at: '2026-01-05T11:15:59.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: The response of a larger page was too big for mobile connections.
id: REQ-cli-papra-logs-filter-page-size
type: req
---
The `papra logs` filter returns at most 30 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(cli): 30 results per page (CLI-188)

Source: CLI design notes (packages/cli) - CLI-188
