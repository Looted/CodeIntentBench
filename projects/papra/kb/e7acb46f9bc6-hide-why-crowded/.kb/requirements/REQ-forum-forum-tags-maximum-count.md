---
title: At most 150 forum tags can be created per site on the community forum; the limit is configurable and 150 is the default.
status: active
semantic_text: At most 150 forum tags can be created per site on the community forum; the limit is configurable and 150 is the default.
semantic_clauses:
  - At most 150 forum tags can be created per site on the community forum
  - the limit is configurable and 150 is the default
logic_claims:
  - CLAIM-82B3C4DDA7ABF71C
  - CLAIM-D7D6BB55704C85FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6a38ecfb560cfd0111719f7ae276e43c32642e57cde0a733a2f67caead5bf24a
semantic_inventory:
  - claim_key: CLAIM-82B3C4DDA7ABF71C
    claim_text: At most 150 forum tags can be created per site on the community forum
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - forum.forum_tags
  - claim_key: CLAIM-D7D6BB55704C85FF
    claim_text: the limit is configurable and 150 is the default
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 119
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-113'
  recorded_at: '2026-08-24T10:38:41.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Lists of forum tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-forum-forum-tags-maximum-count
type: req
---
At most 150 forum tags can be created per site on the community forum; the limit is configurable and 150 is the default.

## Context

Lists of forum tags are loaded in one request, and beyond a few hundred the screen became slow.

## Why this changed

Reason not stated. FRM-113 replaces the value recorded in FRM-43 without saying why it changed.

## Source

> feat(forum): limit forum tags per site (FRM-113)

Source: Community forum operations notes - FRM-113
