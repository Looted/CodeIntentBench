---
title: Matching in the partner portal payout search ignores letter case but not accents.
status: active
semantic_text: Matching in the partner portal payout search ignores letter case but not accents.
semantic_clauses:
  - Matching in the partner portal payout search ignores letter case but not accents
logic_claims:
  - CLAIM-E654618C211547A1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5bfbeb90348683d2236f6f1ba01adde947a7ae4733410d16fbf12afc701f5159
semantic_inventory:
  - claim_key: CLAIM-E654618C211547A1
    claim_text: Matching in the partner portal payout search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-212'
  recorded_at: '2025-12-05T13:32:15.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Identifiers that differ only by case are different things here.
id: REQ-portal-partner-portal-payout-search-case-folding
type: req
---
Matching in the partner portal payout search ignores letter case but not accents.

## Context

Identifiers that differ only by case are different things here.

## Source

> feat(portal): search case folding (PRT-212)

Source: Partner portal decision log - PRT-212
