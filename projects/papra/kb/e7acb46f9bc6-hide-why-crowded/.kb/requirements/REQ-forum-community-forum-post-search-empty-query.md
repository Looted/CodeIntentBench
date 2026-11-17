---
title: An empty query in the community forum post search lists the most recent items.
status: active
semantic_text: An empty query in the community forum post search lists the most recent items.
semantic_clauses:
  - An empty query in the community forum post search lists the most recent items
logic_claims:
  - CLAIM-2B42694E1CA166C1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d542b360d75bcbb48c22b6cccf8dfe94e8ea7db9c5ccacc8bb513e6a053a7c34
semantic_inventory:
  - claim_key: CLAIM-2B42694E1CA166C1
    claim_text: An empty query in the community forum post search lists the most recent items
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - forum.community_forum_post_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-181'
  recorded_at: '2025-03-19T11:34:51.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-forum-community-forum-post-search-empty-query
type: req
---
An empty query in the community forum post search lists the most recent items.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(forum): empty search query (FRM-181)

Source: Community forum operations notes - FRM-181
