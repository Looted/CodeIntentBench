---
title: Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-D7B58934A0A9FBC1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3ecd15d5da0d0d0a38c92f79ddc8687a91fadd2b2d3fbcf0596870fe73d4bc0d
semantic_inventory:
  - claim_key: CLAIM-D7B58934A0A9FBC1
    claim_text: Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-128'
  recorded_at: '2025-12-15T16:05:57.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A deleted forum tag silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-forum-forum-tags-delete-in-use
type: req
---
Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it.

## Context

A deleted forum tag silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(forum): refuse deleting forum tags in use (FRM-128)

Source: Community forum operations notes - FRM-128
