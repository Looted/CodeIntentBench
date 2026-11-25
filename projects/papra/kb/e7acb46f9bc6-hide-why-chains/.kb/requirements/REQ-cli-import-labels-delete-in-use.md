---
title: Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-1903762DA0F675AA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 637a7bd56a1ecdb2617202d6e6e256e32e8acbf55923c98ee97a6c4ef0ae7003
semantic_inventory:
  - claim_key: CLAIM-1903762DA0F675AA
    claim_text: Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-173'
  recorded_at: '2025-06-11T14:53:12.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-import-labels-delete-in-use
type: req
---
Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it.

## Context

Reason not stated.

## Source

> feat(cli): refuse deleting import labels in use (CLI-173)

Source: CLI design notes (packages/cli) - CLI-173
