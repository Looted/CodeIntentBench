---
title: At most 25 forum categories can be added or removed in one request on the community forum.
status: active
semantic_text: At most 25 forum categories can be added or removed in one request on the community forum.
semantic_clauses:
  - At most 25 forum categories can be added or removed in one request on the community forum
logic_claims:
  - CLAIM-FF0DD9612D0AFBCC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d4fc14a60a5ff321b1f81cb216324181708f74b966e4df89ecf56798ff10faf5
semantic_inventory:
  - claim_key: CLAIM-FF0DD9612D0AFBCC
    claim_text: At most 25 forum categories can be added or removed in one request on the community forum
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - forum.forum_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-154'
  recorded_at: '2025-08-01T17:16:59.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Requests with more than 25 forum categories timed out on slow connections.
id: REQ-forum-forum-categories-batch-size
type: req
---
At most 25 forum categories can be added or removed in one request on the community forum.

## Context

Requests with more than 25 forum categories timed out on slow connections.

## Source

> feat(forum): batch forum categories, 25 per request (FRM-154)

Source: Community forum operations notes - FRM-154
