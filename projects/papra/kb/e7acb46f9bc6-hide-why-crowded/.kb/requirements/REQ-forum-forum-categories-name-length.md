---
title: Forum category names on the community forum are limited to 32 characters.
status: active
semantic_text: Forum category names on the community forum are limited to 32 characters.
semantic_clauses:
  - Forum category names on the community forum are limited to 32 characters
logic_claims:
  - CLAIM-48BE7DC6B46390E8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5a14a4e3b0a341726a48ad101c3eea62cc14e27952b8afe99915faf41b220688
semantic_inventory:
  - claim_key: CLAIM-48BE7DC6B46390E8
    claim_text: Forum category names on the community forum are limited to 32 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - forum.forum_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-137'
  recorded_at: '2026-06-27T17:59:48.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Longer names broke the layout of the list where forum categories are shown.
id: REQ-forum-forum-categories-name-length
type: req
---
Forum category names on the community forum are limited to 32 characters.

## Context

Longer names broke the layout of the list where forum categories are shown.

## Source

> feat(forum): cap forum category name length at 32 (FRM-137)

Source: Community forum operations notes - FRM-137
