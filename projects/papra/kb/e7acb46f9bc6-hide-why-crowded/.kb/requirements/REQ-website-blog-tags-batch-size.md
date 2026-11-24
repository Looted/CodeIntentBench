---
title: At most 5 blog tags can be added or removed in one request on the marketing website.
status: active
semantic_text: At most 5 blog tags can be added or removed in one request on the marketing website.
semantic_clauses:
  - At most 5 blog tags can be added or removed in one request on the marketing website
logic_claims:
  - CLAIM-3173151F50431042
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5e2e6e6fc3bdd65b61ac95615bc9583902f930ba7d233ba1e26f2ff55389ecd5
semantic_inventory:
  - claim_key: CLAIM-3173151F50431042
    claim_text: At most 5 blog tags can be added or removed in one request on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - website.blog_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-131'
  recorded_at: '2025-11-25T15:34:08.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Requests with more than 5 blog tags timed out on slow connections.
id: REQ-website-blog-tags-batch-size
type: req
---
At most 5 blog tags can be added or removed in one request on the marketing website.

## Context

Requests with more than 5 blog tags timed out on slow connections.

## Source

> feat(website): batch blog tags, 5 per request (WEB-131)

Source: Marketing website decision log (apps/website) - WEB-131
