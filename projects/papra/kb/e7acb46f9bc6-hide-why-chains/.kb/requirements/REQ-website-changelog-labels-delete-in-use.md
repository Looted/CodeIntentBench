---
title: Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-23C835AE5857CF61
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ceca8b6157d29815356d4316c9670e3dbf50987465e651c2cfa1b32a4098f9a7
semantic_inventory:
  - claim_key: CLAIM-23C835AE5857CF61
    claim_text: Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-186'
  recorded_at: '2026-09-03T17:29:20.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Asking for confirmation once per use made cleaning up changelog labels impractical.
id: REQ-website-changelog-labels-delete-in-use
type: req
---
Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up changelog labels impractical.

## Source

> feat(website): deleting a changelog label detaches it (WEB-186)

Source: Marketing website decision log (apps/website) - WEB-186
