---
title: An empty query in the help-centre article search lists the most recent items.
status: active
semantic_text: An empty query in the help-centre article search lists the most recent items.
semantic_clauses:
  - An empty query in the help-centre article search lists the most recent items
logic_claims:
  - CLAIM-7B43019B432833E0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8723262110fc9d6af4eee2574716a3cca043b35fb9f4d6fd3cd1e44a2d56c792
semantic_inventory:
  - claim_key: CLAIM-7B43019B432833E0
    claim_text: An empty query in the help-centre article search lists the most recent items
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - support.help_centre_article_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-206'
  recorded_at: '2025-03-06T08:08:56.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-support-help-centre-article-search-empty-query
type: req
---
An empty query in the help-centre article search lists the most recent items.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(support): empty search query (SUP-206)

Source: Support portal decision log - SUP-206
