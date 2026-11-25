---
title: An empty query in the community forum member search returns nothing.
status: active
semantic_text: An empty query in the community forum member search returns nothing.
semantic_clauses:
  - An empty query in the community forum member search returns nothing
logic_claims:
  - CLAIM-E33FD4E515D49137
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 03c5d299bdea79e130a5e63a870d3b242c71ffc953808345fcfc87e38eb9f869
semantic_inventory:
  - claim_key: CLAIM-E33FD4E515D49137
    claim_text: An empty query in the community forum member search returns nothing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - forum.community_forum_member_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-141'
  recorded_at: '2025-06-10T15:00:43.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-forum-community-forum-member-search-empty-query
type: req
---
An empty query in the community forum member search returns nothing.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(forum): empty search query (FRM-141)

Source: Community forum operations notes - FRM-141
