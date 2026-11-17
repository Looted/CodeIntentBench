---
title: Changelog label names on the marketing website are limited to 48 characters.
status: active
semantic_text: Changelog label names on the marketing website are limited to 48 characters.
semantic_clauses:
  - Changelog label names on the marketing website are limited to 48 characters
logic_claims:
  - CLAIM-5509E535C28AA89B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5554fd02c54ff1a9f16c670f244ff6b261aa76fd9d01ed73f3c76430e9fde339
semantic_inventory:
  - claim_key: CLAIM-5509E535C28AA89B
    claim_text: Changelog label names on the marketing website are limited to 48 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-173'
  recorded_at: '2025-11-20T11:22:29.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: The column that stores the name is 48 characters wide.
id: REQ-website-changelog-labels-name-length
type: req
---
Changelog label names on the marketing website are limited to 48 characters.

## Context

The column that stores the name is 48 characters wide.

## Source

> feat(website): cap changelog label name length at 48 (WEB-173)

Source: Marketing website decision log (apps/website) - WEB-173
