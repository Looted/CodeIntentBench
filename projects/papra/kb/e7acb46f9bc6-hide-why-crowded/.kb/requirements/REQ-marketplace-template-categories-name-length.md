---
title: Template category names in the template marketplace are limited to 48 characters.
status: active
semantic_text: Template category names in the template marketplace are limited to 48 characters.
semantic_clauses:
  - Template category names in the template marketplace are limited to 48 characters
logic_claims:
  - CLAIM-E17EBC841E9D73B4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c73d6d8c7fd91db0b5dbc277a56f8343e1894d908f922f6d5d2fc5590a26d772
semantic_inventory:
  - claim_key: CLAIM-E17EBC841E9D73B4
    claim_text: Template category names in the template marketplace are limited to 48 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - marketplace.template_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-130'
  recorded_at: '2025-02-22T14:05:31.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Longer names broke the layout of the list where template categories are shown.
id: REQ-marketplace-template-categories-name-length
type: req
---
Template category names in the template marketplace are limited to 48 characters.

## Context

Longer names broke the layout of the list where template categories are shown.

## Source

> feat(marketplace): cap template category name length at 48 (MKT-130)

Source: Template marketplace decision log - MKT-130
