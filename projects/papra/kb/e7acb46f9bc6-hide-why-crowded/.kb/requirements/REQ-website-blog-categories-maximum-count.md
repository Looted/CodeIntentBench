---
title: At most 1000 blog categories can be created per site on the marketing website; the limit is configurable and 1000 is the default.
status: active
semantic_text: At most 1000 blog categories can be created per site on the marketing website; the limit is configurable and 1000 is the default.
semantic_clauses:
  - At most 1000 blog categories can be created per site on the marketing website
  - the limit is configurable and 1000 is the default
logic_claims:
  - CLAIM-A0E0C299A269E2F5
  - CLAIM-D14F54198D4B07D0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b564e27df9e598a3cfcbe9905f76c402008806e528f2df25115cc00c663d73e4
semantic_inventory:
  - claim_key: CLAIM-A0E0C299A269E2F5
    claim_text: At most 1000 blog categories can be created per site on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - website.blog_categories
  - claim_key: CLAIM-D14F54198D4B07D0
    claim_text: the limit is configurable and 1000 is the default
    role: descriptive
    status: modeled
    span:
      start: 79
      end: 128
    subjects:
      - website.blog_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-144'
  recorded_at: '2025-02-04T17:22:15.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: An unbounded number of blog categories had been used to store data the feature was never meant for.
id: REQ-website-blog-categories-maximum-count
type: req
---
At most 1000 blog categories can be created per site on the marketing website; the limit is configurable and 1000 is the default.

## Context

An unbounded number of blog categories had been used to store data the feature was never meant for.

## Source

> feat(website): limit blog categories per site (WEB-144)

Source: Marketing website decision log (apps/website) - WEB-144
