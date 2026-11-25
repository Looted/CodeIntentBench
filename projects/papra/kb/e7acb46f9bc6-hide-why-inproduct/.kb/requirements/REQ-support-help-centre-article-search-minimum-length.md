---
title: The help-centre article search runs only once the query has at least 2 characters.
status: active
semantic_text: The help-centre article search runs only once the query has at least 2 characters.
semantic_clauses:
  - The help-centre article search runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-8C9380BCCA3E2B27
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9e35095e34cc60b87221ac463c1a6b6001ca1178fbf9baf68db59d8224b0cc9e
semantic_inventory:
  - claim_key: CLAIM-8C9380BCCA3E2B27
    claim_text: The help-centre article search runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - support.help_centre_article_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-187'
  recorded_at: '2025-03-27T11:14:33.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-support-help-centre-article-search-minimum-length
type: req
---
The help-centre article search runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(support): minimum query length 2 (SUP-187)

Source: Support portal decision log - SUP-187
