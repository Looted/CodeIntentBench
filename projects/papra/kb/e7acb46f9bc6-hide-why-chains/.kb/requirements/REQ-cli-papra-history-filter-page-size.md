---
title: The `papra history` filter returns at most 10 results per page.
status: active
semantic_text: The `papra history` filter returns at most 10 results per page.
semantic_clauses:
  - The `papra history` filter returns at most 10 results per page
logic_claims:
  - CLAIM-18C13FB8E2922103
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8e2cdd7b3d5964881f46e59cffb9d45e9f8ff8a2c1929133510198c54ebb44a2
semantic_inventory:
  - claim_key: CLAIM-18C13FB8E2922103
    claim_text: The `papra history` filter returns at most 10 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - cli.papra_history_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-215'
  recorded_at: '2025-08-05T16:03:48.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Larger pages were slow on the devices most people use.
id: REQ-cli-papra-history-filter-page-size
type: req
---
The `papra history` filter returns at most 10 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(cli): 10 results per page (CLI-215)

Source: CLI design notes (packages/cli) - CLI-215
