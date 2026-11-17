---
title: Matching in the documentation site search ignores letter case but not accents.
status: active
semantic_text: Matching in the documentation site search ignores letter case but not accents.
semantic_clauses:
  - Matching in the documentation site search ignores letter case but not accents
logic_claims:
  - CLAIM-B2ACFC2CC59C76C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c9702d08bcde8a88359c5c6b8903533a2004631fc12db9dbcdb618318a0a03c8
semantic_inventory:
  - claim_key: CLAIM-B2ACFC2CC59C76C8
    claim_text: Matching in the documentation site search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - docs.documentation_site_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-216'
  recorded_at: '2025-10-23T15:26:19.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-docs-documentation-site-search-case-folding
type: req
---
Matching in the documentation site search ignores letter case but not accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(docs): search case folding (DOC-216)

Source: Documentation site decision log (apps/docs) - DOC-216
