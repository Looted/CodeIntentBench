---
title: Import labels in the papra CLI are listed in the order they were created.
status: active
semantic_text: Import labels in the papra CLI are listed in the order they were created.
semantic_clauses:
  - Import labels in the papra CLI are listed in the order they were created
logic_claims:
  - CLAIM-BE860D04A10161D3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3b0d1f3f53a58ebd70a5ad169c8156ad852f1b47e158ce95a740f2c8cf15f5d4
semantic_inventory:
  - claim_key: CLAIM-BE860D04A10161D3
    claim_text: Import labels in the papra CLI are listed in the order they were created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-168'
  recorded_at: '2025-08-10T08:33:41.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: People looked for an import label by name and could not find it in a list ordered by creation.
id: REQ-cli-import-labels-listing-order
type: req
---
Import labels in the papra CLI are listed in the order they were created.

## Context

People looked for an import label by name and could not find it in a list ordered by creation.

## Source

> feat(cli): order import labels in the order they were created (CLI-168)

Source: CLI design notes (packages/cli) - CLI-168
