---
title: At most 10 forum tags can be added or removed in one request on the community forum.
status: active
semantic_text: At most 10 forum tags can be added or removed in one request on the community forum.
semantic_clauses:
  - At most 10 forum tags can be added or removed in one request on the community forum
logic_claims:
  - CLAIM-393DC23F4ACDC86C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 955aeedeea5ba60d564f150984cfd8dc4990a260af595363f2a904788baab5cb
semantic_inventory:
  - claim_key: CLAIM-393DC23F4ACDC86C
    claim_text: At most 10 forum tags can be added or removed in one request on the community forum
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-131'
  recorded_at: '2025-06-05T14:33:43.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Requests with more than 10 forum tags timed out on slow connections.
id: REQ-forum-forum-tags-batch-size
type: req
---
At most 10 forum tags can be added or removed in one request on the community forum.

## Context

Requests with more than 10 forum tags timed out on slow connections.

## Source

> feat(forum): batch forum tags, 10 per request (FRM-131)

Source: Community forum operations notes - FRM-131
