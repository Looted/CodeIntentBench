---
title: A member can have at most 3 forum groups on the community forum; the limit is the same for everyone.
status: active
semantic_text: A member can have at most 3 forum groups on the community forum; the limit is the same for everyone.
semantic_clauses:
  - A member can have at most 3 forum groups on the community forum
  - the limit is the same for everyone
logic_claims:
  - CLAIM-59EDE79C70494441
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc37bf4743c4f431a7ffe262404284232392d265c3b68552d53707dd31ff7818
semantic_inventory:
  - claim_key: CLAIM-59EDE79C70494441
    claim_text: A member can have at most 3 forum groups on the community forum
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - forum.forum_groups
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 65
      end: 99
    subjects:
      - forum.forum_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-284'
  recorded_at: '2026-07-06T14:51:54.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-groups-maximum-count
type: req
---
A member can have at most 3 forum groups on the community forum; the limit is the same for everyone.

## Context

Reason not stated.

## Source

> feat(forum): limit forum groups per member (FRM-284)

Source: Community forum operations notes - FRM-284
