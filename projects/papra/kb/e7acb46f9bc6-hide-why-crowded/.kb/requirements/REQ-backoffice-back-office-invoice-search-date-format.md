---
title: 'The issued: filter of the back office invoice search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
status: active
semantic_text: 'The issued: filter of the back office invoice search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
semantic_clauses:
  - 'The issued: filter of the back office invoice search accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
logic_claims:
  - CLAIM-2A79081853ECE28A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a494ebed7738f8b77af60602697af700ae4b1a5b28d8af139e2723a476b92582
semantic_inventory:
  - claim_key: CLAIM-2A79081853ECE28A
    claim_text: 'The issued: filter of the back office invoice search accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - backoffice.back_office_invoice_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-303'
  recorded_at: '2026-06-21T09:38:42.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-backoffice-back-office-invoice-search-date-format
type: req
---
The issued: filter of the back office invoice search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(backoffice): date formats of the issued: filter (OPS-303)

Source: Papra Cloud back office handbook - OPS-303
