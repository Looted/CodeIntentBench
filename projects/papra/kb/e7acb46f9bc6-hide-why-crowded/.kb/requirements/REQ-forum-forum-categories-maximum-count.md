---
title: A site can hold at most 500 forum categories on the community forum; the limit is fixed.
status: active
semantic_text: A site can hold at most 500 forum categories on the community forum; the limit is fixed.
semantic_clauses:
  - A site can hold at most 500 forum categories on the community forum
  - the limit is fixed
logic_claims:
  - CLAIM-42B2A0152E4C371A
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1ec28efa76baf3554cb34c070399f1c73a5263fc2bfd04b9842d1184c4d3d6f5
semantic_inventory:
  - claim_key: CLAIM-42B2A0152E4C371A
    claim_text: A site can hold at most 500 forum categories on the community forum
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - forum.forum_categories
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 69
      end: 87
    subjects:
      - forum.forum_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-136'
  recorded_at: '2025-07-02T12:46:08.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Lists of forum categories are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-forum-forum-categories-maximum-count
type: req
---
A site can hold at most 500 forum categories on the community forum; the limit is fixed.

## Context

Lists of forum categories are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(forum): limit forum categories per site (FRM-136)

Source: Community forum operations notes - FRM-136
