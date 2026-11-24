---
title: Forum categories on the community forum are listed by most recent use first.
status: active
semantic_text: Forum categories on the community forum are listed by most recent use first.
semantic_clauses:
  - Forum categories on the community forum are listed by most recent use first
logic_claims:
  - CLAIM-BFDEB780BB04E275
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cc65704df5a9b4205fd197e49df67b7d9d3aafdd700bf2caaba0926b0671536d
semantic_inventory:
  - claim_key: CLAIM-BFDEB780BB04E275
    claim_text: Forum categories on the community forum are listed by most recent use first
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - forum.forum_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-145'
  recorded_at: '2025-02-06T08:43:21.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: People looked for a forum category by name and could not find it in a list ordered by creation.
id: REQ-forum-forum-categories-listing-order
type: req
---
Forum categories on the community forum are listed by most recent use first.

## Context

People looked for a forum category by name and could not find it in a list ordered by creation.

## Source

> feat(forum): order forum categories by most recent use first (FRM-145)

Source: Community forum operations notes - FRM-145
