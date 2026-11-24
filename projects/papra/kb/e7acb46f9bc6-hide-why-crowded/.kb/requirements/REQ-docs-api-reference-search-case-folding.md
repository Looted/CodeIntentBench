---
title: Matching in the API reference search ignores letter case and accents.
status: active
semantic_text: Matching in the API reference search ignores letter case and accents.
semantic_clauses:
  - Matching in the API reference search ignores letter case and accents
logic_claims:
  - CLAIM-9CD6733F17619585
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dead94737a9ad1b1cd2b50f5df86b1f2de2ae5904bb673748ff5249d9e24d828
semantic_inventory:
  - claim_key: CLAIM-9CD6733F17619585
    claim_text: Matching in the API reference search ignores letter case and accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - docs.api_reference_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-249'
  recorded_at: '2026-08-11T16:39:29.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Identifiers that differ only by case are different things here.
id: REQ-docs-api-reference-search-case-folding
type: req
---
Matching in the API reference search ignores letter case and accents.

## Context

Identifiers that differ only by case are different things here.

## Source

> feat(docs): search case folding (DOC-249)

Source: Documentation site decision log (apps/docs) - DOC-249
