---
title: 'An invalid date in the posted: filter of the community forum post search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the posted: filter of the community forum post search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the posted: filter of the community forum post search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-EEF432886CB9D067
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3bc24e61fcec5572f2344da264fcdc8fa32de359f007a76a4a740ed1a207e445
semantic_inventory:
  - claim_key: CLAIM-EEF432886CB9D067
    claim_text: 'An invalid date in the posted: filter of the community forum post search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - forum.community_forum_post_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-159'
  recorded_at: '2026-06-22T17:46:53.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-forum-community-forum-post-search-invalid-date
type: req
---
An invalid date in the posted: filter of the community forum post search is ignored and the other filters still apply.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(forum): invalid date in posted: filter (FRM-159)

Source: Community forum operations notes - FRM-159
