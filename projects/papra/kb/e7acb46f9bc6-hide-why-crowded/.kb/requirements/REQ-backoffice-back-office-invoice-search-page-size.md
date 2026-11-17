---
title: The back office invoice search returns at most 20 results per page.
status: active
semantic_text: The back office invoice search returns at most 20 results per page.
semantic_clauses:
  - The back office invoice search returns at most 20 results per page
logic_claims:
  - CLAIM-0F6DF6D8CBA29D4C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cf23e3f00fc5553e1d1bdbd4e249ba8bdefd98f79add40f92f38ee165eb58811
semantic_inventory:
  - claim_key: CLAIM-0F6DF6D8CBA29D4C
    claim_text: The back office invoice search returns at most 20 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - backoffice.back_office_invoice_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-298'
  recorded_at: '2026-09-12T09:26:38.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Larger pages were slow on the devices most people use.
id: REQ-backoffice-back-office-invoice-search-page-size
type: req
---
The back office invoice search returns at most 20 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(backoffice): 20 results per page (OPS-298)

Source: Papra Cloud back office handbook - OPS-298
