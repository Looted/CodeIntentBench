---
title: Matching in the back office customer search ignores letter case and accents.
status: active
semantic_text: Matching in the back office customer search ignores letter case and accents.
semantic_clauses:
  - Matching in the back office customer search ignores letter case and accents
logic_claims:
  - CLAIM-15DA649E54AD6061
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 01704a3a98f8a0024d86144525277dd04cdc11851bb9c924b8f38cd150895557
semantic_inventory:
  - claim_key: CLAIM-15DA649E54AD6061
    claim_text: Matching in the back office customer search ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-225'
  recorded_at: '2025-08-16T16:44:25.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Identifiers that differ only by case are different things here.
id: REQ-backoffice-back-office-customer-search-case-folding
type: req
---
Matching in the back office customer search ignores letter case and accents.

## Context

Identifiers that differ only by case are different things here.

## Source

> feat(backoffice): search case folding (OPS-225)

Source: Papra Cloud back office handbook - OPS-225
