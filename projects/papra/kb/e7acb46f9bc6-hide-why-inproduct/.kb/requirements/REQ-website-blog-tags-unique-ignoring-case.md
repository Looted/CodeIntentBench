---
title: Blog tags on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-tag-already-exists.
status: active
semantic_text: Blog tags on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-tag-already-exists.
semantic_clauses:
  - Blog tags on the marketing website are unique per site regardless of letter case
  - a duplicate is reported as blog-tag-already-exists
logic_claims:
  - CLAIM-E0A500FC58D4BAAC
  - CLAIM-F617ACDFA1DDE775
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 321bd9fe55363176262b16a4b143b26e780838c4e618dac6fbbff3deda6a2a5c
semantic_inventory:
  - claim_key: CLAIM-E0A500FC58D4BAAC
    claim_text: Blog tags on the marketing website are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - website.blog_tags
  - claim_key: CLAIM-F617ACDFA1DDE775
    claim_text: a duplicate is reported as blog-tag-already-exists
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 132
    subjects:
      - website.blog_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-105'
  recorded_at: '2025-05-12T13:01:13.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Two blog tags that differed only by capitalisation were being created by accident and then merged by hand.
id: REQ-website-blog-tags-unique-ignoring-case
type: req
---
Blog tags on the marketing website are unique per site regardless of letter case; a duplicate is reported as blog-tag-already-exists.

## Context

Two blog tags that differed only by capitalisation were being created by accident and then merged by hand.

## Source

> feat(website): case-insensitive unique blog tag names (WEB-105)

Source: Marketing website decision log (apps/website) - WEB-105
