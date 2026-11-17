---
title: Forum tag names on the community forum are limited to 40 characters.
status: active
semantic_text: Forum tag names on the community forum are limited to 40 characters.
semantic_clauses:
  - Forum tag names on the community forum are limited to 40 characters
logic_claims:
  - CLAIM-15D717AC08A280D3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: accc2b21a75f6ad0a8d3c52a3430cca338fefc99e52a0bbbd1573adaddfee6c4
semantic_inventory:
  - claim_key: CLAIM-15D717AC08A280D3
    claim_text: Forum tag names on the community forum are limited to 40 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-121'
  recorded_at: '2026-01-04T14:34:25.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The column that stores the name is 40 characters wide.
id: REQ-forum-forum-tags-name-length
type: req
---
Forum tag names on the community forum are limited to 40 characters.

## Context

The column that stores the name is 40 characters wide.

## Source

> feat(forum): cap forum tag name length at 40 (FRM-121)

Source: Community forum operations notes - FRM-121
