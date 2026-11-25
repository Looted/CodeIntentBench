---
title: At most 100 import labels can be created per import run in the papra CLI; the limit is fixed.
status: active
semantic_text: At most 100 import labels can be created per import run in the papra CLI; the limit is fixed.
semantic_clauses:
  - At most 100 import labels can be created per import run in the papra CLI
  - the limit is fixed
logic_claims:
  - CLAIM-D045F373BCE20728
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 31f6de7b84d0196f7a938c7d2537e1e2cf52008a3c2f031f0ae0b8e834af473e
semantic_inventory:
  - claim_key: CLAIM-D045F373BCE20728
    claim_text: At most 100 import labels can be created per import run in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - cli.import_labels
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 92
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-156'
  recorded_at: '2026-07-28T17:48:48.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Lists of import labels are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-cli-import-labels-maximum-count
type: req
---
At most 100 import labels can be created per import run in the papra CLI; the limit is fixed.

## Context

Lists of import labels are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(cli): limit import labels per import run (CLI-156)

Source: CLI design notes (packages/cli) - CLI-156
