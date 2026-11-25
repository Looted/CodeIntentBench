---
title: At most 20 import labels can be added or removed in one request in the papra CLI.
status: active
semantic_text: At most 20 import labels can be added or removed in one request in the papra CLI.
semantic_clauses:
  - At most 20 import labels can be added or removed in one request in the papra CLI
logic_claims:
  - CLAIM-FFDB7ED09AC82B4A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cde2972a69be2bc4fe09e1d439bd78d66cdd9b14070651e4a29147101a8bd610
semantic_inventory:
  - claim_key: CLAIM-FFDB7ED09AC82B4A
    claim_text: At most 20 import labels can be added or removed in one request in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-175'
  recorded_at: '2026-05-13T17:07:21.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-import-labels-batch-size
type: req
---
At most 20 import labels can be added or removed in one request in the papra CLI.

## Context

Reason not stated.

## Source

> feat(cli): batch import labels, 20 per request (CLI-175)

Source: CLI design notes (packages/cli) - CLI-175
