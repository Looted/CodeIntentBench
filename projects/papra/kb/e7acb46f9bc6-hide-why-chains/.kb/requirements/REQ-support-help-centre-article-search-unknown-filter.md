---
title: A filter name that the help-centre article search does not know is treated as plain search text.
status: active
semantic_text: A filter name that the help-centre article search does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the help-centre article search does not know is treated as plain search text
logic_claims:
  - CLAIM-39B598A599CFF379
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 48ad8c4d6d761c7f307f33743cb414fc1adf99e62322e7ccb64fc5100b9b06e6
semantic_inventory:
  - claim_key: CLAIM-39B598A599CFF379
    claim_text: A filter name that the help-centre article search does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - support.help_centre_article_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-218'
  recorded_at: '2026-06-03T12:48:19.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A mistyped filter name silently widened the search.
id: REQ-support-help-centre-article-search-unknown-filter
type: req
---
A filter name that the help-centre article search does not know is treated as plain search text.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(support): unknown search filters (SUP-218)

Source: Support portal decision log - SUP-218
