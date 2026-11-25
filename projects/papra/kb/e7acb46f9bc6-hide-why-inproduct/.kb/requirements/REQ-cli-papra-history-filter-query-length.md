---
title: A query in the `papra history` filter is limited to 200 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the `papra history` filter is limited to 200 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the `papra history` filter is limited to 200 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-52AAAC61DDD30A76
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c31d8b1896b36538ee6ed8b1c89a818b1bbfad0e41dac997761cda08a6adc476
semantic_inventory:
  - claim_key: CLAIM-52AAAC61DDD30A76
    claim_text: A query in the `papra history` filter is limited to 200 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - cli.papra_history_filter
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 117
    subjects:
      - cli.papra_history_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-204'
  recorded_at: '2026-04-21T12:50:41.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Very long queries were used to slow the search backend down.
id: REQ-cli-papra-history-filter-query-length
type: req
---
A query in the `papra history` filter is limited to 200 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(cli): limit search query length to 200 (CLI-204)

Source: CLI design notes (packages/cli) - CLI-204
