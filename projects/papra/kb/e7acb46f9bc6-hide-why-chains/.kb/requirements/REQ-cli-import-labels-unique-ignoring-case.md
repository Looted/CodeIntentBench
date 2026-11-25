---
title: Import labels in the papra CLI are unique per import run regardless of letter case; a duplicate is reported as import-label-already-exists.
status: active
semantic_text: Import labels in the papra CLI are unique per import run regardless of letter case; a duplicate is reported as import-label-already-exists.
semantic_clauses:
  - Import labels in the papra CLI are unique per import run regardless of letter case
  - a duplicate is reported as import-label-already-exists
logic_claims:
  - CLAIM-B5BB82E06450682D
  - CLAIM-9236DF0EA757B642
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 936ec53744026d858e27b8037cf2e0bfe960f097630f2fff65336cb3a440fb52
semantic_inventory:
  - claim_key: CLAIM-B5BB82E06450682D
    claim_text: Import labels in the papra CLI are unique per import run regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - cli.import_labels
  - claim_key: CLAIM-9236DF0EA757B642
    claim_text: a duplicate is reported as import-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 138
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-153'
  recorded_at: '2025-06-20T11:52:26.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Imports from other tools produced "Import label" and "import label" side by side, and reports counted them separately.
id: REQ-cli-import-labels-unique-ignoring-case
type: req
---
Import labels in the papra CLI are unique per import run regardless of letter case; a duplicate is reported as import-label-already-exists.

## Context

Imports from other tools produced "Import label" and "import label" side by side, and reports counted them separately.

## Source

> feat(cli): case-insensitive unique import label names (CLI-153)

Source: CLI design notes (packages/cli) - CLI-153
