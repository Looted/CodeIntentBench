---
title: 'The message: filter of the `papra logs` filter uses contains matching, not exact equality.'
status: active
semantic_text: 'The message: filter of the `papra logs` filter uses contains matching, not exact equality.'
semantic_clauses:
  - 'The message: filter of the `papra logs` filter uses contains matching, not exact equality'
logic_claims:
  - CLAIM-B3DBD7E1C374A2D8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 91dcdac3d4b28f2935d8b8bd65405d823215c054e87398285d07e16b2c490280
semantic_inventory:
  - claim_key: CLAIM-B3DBD7E1C374A2D8
    claim_text: 'The message: filter of the `papra logs` filter uses contains matching, not exact equality'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-182'
  recorded_at: '2025-02-03T14:31:43.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Results that only contained the term somewhere drowned the one that was asked for.
id: REQ-cli-papra-logs-filter-text-filter-matching
type: req
---
The message: filter of the `papra logs` filter uses contains matching, not exact equality.

## Context

Results that only contained the term somewhere drowned the one that was asked for.

## Source

> feat(cli): message: filter matching (CLI-182)

Source: CLI design notes (packages/cli) - CLI-182
