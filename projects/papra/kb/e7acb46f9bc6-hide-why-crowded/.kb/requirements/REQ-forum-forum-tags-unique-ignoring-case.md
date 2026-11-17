---
title: Forum tags on the community forum are unique per site regardless of letter case; a duplicate is reported as forum-tag-already-exists.
status: active
semantic_text: Forum tags on the community forum are unique per site regardless of letter case; a duplicate is reported as forum-tag-already-exists.
semantic_clauses:
  - Forum tags on the community forum are unique per site regardless of letter case
  - a duplicate is reported as forum-tag-already-exists
logic_claims:
  - CLAIM-AD71D8F57BBCCE9F
  - CLAIM-DC86354351D563C6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e2f208315ebb46e4f84aa3a8d08fabdfdfc29eb47ccbb7d5ba8da2f056276ada
semantic_inventory:
  - claim_key: CLAIM-AD71D8F57BBCCE9F
    claim_text: Forum tags on the community forum are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - forum.forum_tags
  - claim_key: CLAIM-DC86354351D563C6
    claim_text: a duplicate is reported as forum-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 132
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-105'
  recorded_at: '2025-12-16T14:33:22.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-tags-unique-ignoring-case
type: req
---
Forum tags on the community forum are unique per site regardless of letter case; a duplicate is reported as forum-tag-already-exists.

## Context

Reason not stated.

## Source

> feat(forum): case-insensitive unique forum tag names (FRM-105)

Source: Community forum operations notes - FRM-105
