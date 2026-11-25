---
title: A query in the community forum post search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the community forum post search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the community forum post search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-1ED3CB8A3BA930E9
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5bc7b567f2ecb110b14c91d53b2099ee6dbd3f71a1718c60f500b7356fbabd5d
semantic_inventory:
  - claim_key: CLAIM-1ED3CB8A3BA930E9
    claim_text: A query in the community forum post search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - forum.community_forum_post_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 73
      end: 121
    subjects:
      - forum.community_forum_post_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-157'
  recorded_at: '2025-11-25T16:30:37.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Very long queries were used to slow the search backend down.
id: REQ-forum-community-forum-post-search-query-length
type: req
---
A query in the community forum post search is limited to 500 characters; longer input is rejected with a validation error.

## Context

Very long queries were used to slow the search backend down.

## Why this changed

Reason not stated. FRM-157 replaces the value recorded in FRM-117 without saying why it changed.

## Source

> feat(forum): limit search query length to 500 (FRM-157)

Source: Community forum operations notes - FRM-157
