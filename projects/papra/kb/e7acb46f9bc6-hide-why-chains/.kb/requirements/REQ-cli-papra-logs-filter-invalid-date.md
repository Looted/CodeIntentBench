---
title: 'An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value.'
status: active
semantic_text: 'An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value.'
semantic_clauses:
  - 'An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value'
logic_claims:
  - CLAIM-D7BA1C0883D49721
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fc3d7a1e12cf65df0151257d5dfc14d922e49ca3fc05f2f8e3acdf29d0d5e3c8
semantic_inventory:
  - claim_key: CLAIM-D7BA1C0883D49721
    claim_text: 'An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value'
    role: normative
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - cli.papra_logs_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-181'
  recorded_at: '2025-05-09T15:52:35.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-cli-papra-logs-filter-invalid-date
type: req
---
An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(cli): invalid date in since: filter (CLI-181)

Source: CLI design notes (packages/cli) - CLI-181
