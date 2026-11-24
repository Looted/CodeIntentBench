---
title: Page tags on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as page-tag-already-exists.
status: active
semantic_text: Page tags on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as page-tag-already-exists.
semantic_clauses:
  - Page tags on the documentation site are unique per documentation version regardless of letter case
  - a duplicate is reported as page-tag-already-exists
logic_claims:
  - CLAIM-AAD4990CF24BE1B6
  - CLAIM-2D472C64E00F21D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8edd488baf831bb62c1059a80781ce7e59fc134d457857c6cb0fab7808647a0f
semantic_inventory:
  - claim_key: CLAIM-AAD4990CF24BE1B6
    claim_text: Page tags on the documentation site are unique per documentation version regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - docs.page_tags
  - claim_key: CLAIM-2D472C64E00F21D4
    claim_text: a duplicate is reported as page-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 100
      end: 150
    subjects:
      - docs.page_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-108'
  recorded_at: '2025-09-03T15:14:08.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Imports from other tools produced "Page tag" and "page tag" side by side, and reports counted them separately.
id: REQ-docs-page-tags-unique-ignoring-case
type: req
---
Page tags on the documentation site are unique per documentation version regardless of letter case; a duplicate is reported as page-tag-already-exists.

## Context

Imports from other tools produced "Page tag" and "page tag" side by side, and reports counted them separately.

## Source

> feat(docs): case-insensitive unique page tag names (DOC-108)

Source: Documentation site decision log (apps/docs) - DOC-108
