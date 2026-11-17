---
title: 'The posted: filter of the community forum post search accepts dates in the format of the browser locale.'
status: active
semantic_text: 'The posted: filter of the community forum post search accepts dates in the format of the browser locale.'
semantic_clauses:
  - 'The posted: filter of the community forum post search accepts dates in the format of the browser locale'
logic_claims:
  - CLAIM-F56D23646771D9B1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6d3b553cf5569458afff17e67f9c7f8aaad094c1ca98f38928c7112bef247edb
semantic_inventory:
  - claim_key: CLAIM-F56D23646771D9B1
    claim_text: 'The posted: filter of the community forum post search accepts dates in the format of the browser locale'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - forum.community_forum_post_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-177'
  recorded_at: '2025-09-04T13:23:55.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-forum-community-forum-post-search-date-format
type: req
---
The posted: filter of the community forum post search accepts dates in the format of the browser locale.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(forum): date formats of the posted: filter (FRM-177)

Source: Community forum operations notes - FRM-177
