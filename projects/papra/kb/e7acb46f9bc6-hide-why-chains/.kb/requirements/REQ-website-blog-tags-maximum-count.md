---
title: At most 100 blog tags can be created per site on the marketing website; the limit is fixed.
status: active
semantic_text: At most 100 blog tags can be created per site on the marketing website; the limit is fixed.
semantic_clauses:
  - At most 100 blog tags can be created per site on the marketing website
  - the limit is fixed
logic_claims:
  - CLAIM-13170E5FC13BE4E3
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 41383d3829fd7eb1e6fe97d733a0f43168b7d483e283db156ab95df0fd1f1951
semantic_inventory:
  - claim_key: CLAIM-13170E5FC13BE4E3
    claim_text: At most 100 blog tags can be created per site on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - website.blog_tags
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 90
    subjects:
      - website.blog_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-108'
  recorded_at: '2025-12-21T11:22:16.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-blog-tags-maximum-count
type: req
---
At most 100 blog tags can be created per site on the marketing website; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(website): limit blog tags per site (WEB-108)

Source: Marketing website decision log (apps/website) - WEB-108
