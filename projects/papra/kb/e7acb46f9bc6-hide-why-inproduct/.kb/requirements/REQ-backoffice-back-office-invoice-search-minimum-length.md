---
title: The back office invoice search runs only once the query has at least 3 characters.
status: active
semantic_text: The back office invoice search runs only once the query has at least 3 characters.
semantic_clauses:
  - The back office invoice search runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-54EACA5D0A00823D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96ba69d7d0d06206363747f6caabb54fb83e376907d445125d71befc4182ff6d
semantic_inventory:
  - claim_key: CLAIM-54EACA5D0A00823D
    claim_text: The back office invoice search runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - backoffice.back_office_invoice_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-145'
  recorded_at: '2025-04-02T14:06:43.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-backoffice-back-office-invoice-search-minimum-length
type: req
---
The back office invoice search runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(backoffice): minimum query length 3 (OPS-145)

Source: Papra Cloud back office handbook - OPS-145
