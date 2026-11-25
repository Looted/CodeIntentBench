---
title: Blog categories on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-category-already-exists.
status: active
semantic_text: Blog categories on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-category-already-exists.
semantic_clauses:
  - Blog categories on the marketing website are unique per site regardless of letter case
  - a duplicate is reported as blog-category-already-exists
logic_claims:
  - CLAIM-B8A7C3467177D212
  - CLAIM-18BB940DEBACDC68
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c4132c0e2f348d0528045958499ea84632bbf55e495e9b37bc339860313833c1
semantic_inventory:
  - claim_key: CLAIM-B8A7C3467177D212
    claim_text: Blog categories on the marketing website are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - website.blog_categories
  - claim_key: CLAIM-18BB940DEBACDC68
    claim_text: a duplicate is reported as blog-category-already-exists
    role: descriptive
    status: modeled
    span:
      start: 88
      end: 143
    subjects:
      - website.blog_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-136'
  recorded_at: '2026-09-12T15:57:09.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-blog-categories-unique-ignoring-case
type: req
---
Blog categories on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-category-already-exists.

## Context

Reason not stated.

## Source

> feat(website): case-insensitive unique blog category names (WEB-136)

Source: Marketing website decision log (apps/website) - WEB-136
