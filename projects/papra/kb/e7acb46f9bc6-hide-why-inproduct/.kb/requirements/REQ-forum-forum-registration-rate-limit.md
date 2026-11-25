---
title: At most 5 requests per IP address per day are accepted in community forum registration.
status: active
semantic_text: At most 5 requests per IP address per day are accepted in community forum registration.
semantic_clauses:
  - At most 5 requests per IP address per day are accepted in community forum registration
logic_claims:
  - CLAIM-1B48125EB01876DC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f43c238c3e1336d35bc258df5b9af415fd162048500883074969477eeeda68f3
semantic_inventory:
  - claim_key: CLAIM-1B48125EB01876DC
    claim_text: At most 5 requests per IP address per day are accepted in community forum registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - forum.forum_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-154'
  recorded_at: '2025-04-20T11:14:07.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A script had submitted the form several thousand times in a night.
id: REQ-forum-forum-registration-rate-limit
type: req
---
At most 5 requests per IP address per day are accepted in community forum registration.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(forum): rate limit forum registration (FRM-154)

Source: Community forum operations notes - FRM-154
