---
title: Matching in the partner portal client search ignores letter case and accents.
status: active
semantic_text: Matching in the partner portal client search ignores letter case and accents.
semantic_clauses:
  - Matching in the partner portal client search ignores letter case and accents
logic_claims:
  - CLAIM-685176036B36BD6E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 226f0de3e89280ddd4cd8fd8509e4ca37e6121c844c29c8a78689a0604572278
semantic_inventory:
  - claim_key: CLAIM-685176036B36BD6E
    claim_text: Matching in the partner portal client search ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - portal.partner_portal_client_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-151'
  recorded_at: '2025-10-10T10:21:42.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-portal-partner-portal-client-search-case-folding
type: req
---
Matching in the partner portal client search ignores letter case and accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(portal): search case folding (PRT-151)

Source: Partner portal decision log - PRT-151
