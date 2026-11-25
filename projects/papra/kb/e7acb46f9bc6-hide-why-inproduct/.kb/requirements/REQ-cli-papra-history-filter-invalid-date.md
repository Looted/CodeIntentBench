---
title: 'An invalid date in the ran: filter of the `papra history` filter makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the ran: filter of the `papra history` filter makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the ran: filter of the `papra history` filter makes the search return nothing'
logic_claims:
  - CLAIM-CE8FFCC0F208CB76
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2762e6beb366f83ee43a9efd5bafea69013f406749f0c025e1a0a00c360615f
semantic_inventory:
  - claim_key: CLAIM-CE8FFCC0F208CB76
    claim_text: 'An invalid date in the ran: filter of the `papra history` filter makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - cli.papra_history_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-205'
  recorded_at: '2026-01-23T08:36:16.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-cli-papra-history-filter-invalid-date
type: req
---
An invalid date in the ran: filter of the `papra history` filter makes the search return nothing.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(cli): invalid date in ran: filter (CLI-205)

Source: CLI design notes (packages/cli) - CLI-205
