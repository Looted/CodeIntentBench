---
title: A query in the help-centre article search is limited to 2048 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the help-centre article search is limited to 2048 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the help-centre article search is limited to 2048 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-0C80881FBB5B3231
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a5b819ae6d90613892fd48961a170381f92b839a820ae39ea0650ce8c4eb16a1
semantic_inventory:
  - claim_key: CLAIM-0C80881FBB5B3231
    claim_text: A query in the help-centre article search is limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - support.help_centre_article_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 73
      end: 121
    subjects:
      - support.help_centre_article_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-192'
  recorded_at: '2026-08-07T08:41:32.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-help-centre-article-search-query-length
type: req
---
A query in the help-centre article search is limited to 2048 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(support): limit search query length to 2048 (SUP-192)

Source: Support portal decision log - SUP-192
