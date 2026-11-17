---
title: A deleted forum group on the community forum can be restored for 7 days; after that it is removed for good.
status: active
semantic_text: A deleted forum group on the community forum can be restored for 7 days; after that it is removed for good.
semantic_clauses:
  - A deleted forum group on the community forum can be restored for 7 days
  - after that it is removed for good
logic_claims:
  - CLAIM-82D2E3C67EB2B001
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea51368ca16ea9cad5cae82543dc565eb3e18ae0cddac56c559f689f41fd0160
semantic_inventory:
  - claim_key: CLAIM-82D2E3C67EB2B001
    claim_text: A deleted forum group on the community forum can be restored for 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - forum.forum_groups
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 106
    subjects:
      - forum.forum_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-309'
  recorded_at: '2025-02-03T08:55:49.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-forum-forum-groups-deletion-grace
type: req
---
A deleted forum group on the community forum can be restored for 7 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(forum): 7-day restore window for forum groups (FRM-309)

Source: Community forum operations notes - FRM-309
