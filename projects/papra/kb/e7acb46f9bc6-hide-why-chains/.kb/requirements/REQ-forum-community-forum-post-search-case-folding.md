---
title: Matching in the community forum post search ignores letter case but not accents.
status: active
semantic_text: Matching in the community forum post search ignores letter case but not accents.
semantic_clauses:
  - Matching in the community forum post search ignores letter case but not accents
logic_claims:
  - CLAIM-4052BA28BBF6C59F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 16288d9eeda6d279edcff3175da3b40652450b87ed15cef68f9dadfd4bd5dbd1
semantic_inventory:
  - claim_key: CLAIM-4052BA28BBF6C59F
    claim_text: Matching in the community forum post search ignores letter case but not accents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - forum.community_forum_post_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-174'
  recorded_at: '2025-05-07T10:28:33.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Names are typed on phones, where capitals and accents are often left out.
id: REQ-forum-community-forum-post-search-case-folding
type: req
---
Matching in the community forum post search ignores letter case but not accents.

## Context

Names are typed on phones, where capitals and accents are often left out.

## Source

> feat(forum): search case folding (FRM-174)

Source: Community forum operations notes - FRM-174
