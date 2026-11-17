---
title: At most 20 blog categories can be added or removed in one request on the marketing website.
status: active
semantic_text: At most 20 blog categories can be added or removed in one request on the marketing website.
semantic_clauses:
  - At most 20 blog categories can be added or removed in one request on the marketing website
logic_claims:
  - CLAIM-592D41E21ED0945A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d285a09e2752bb6a2cb98fc47c6c5387e2b8f071245f8961327b083b2f1866d6
semantic_inventory:
  - claim_key: CLAIM-592D41E21ED0945A
    claim_text: At most 20 blog categories can be added or removed in one request on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - website.blog_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-166'
  recorded_at: '2026-08-22T10:18:44.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Requests with more than 20 blog categories timed out on slow connections.
id: REQ-website-blog-categories-batch-size
type: req
---
At most 20 blog categories can be added or removed in one request on the marketing website.

## Context

Requests with more than 20 blog categories timed out on slow connections.

## Source

> feat(website): batch blog categories, 20 per request (WEB-166)

Source: Marketing website decision log (apps/website) - WEB-166
