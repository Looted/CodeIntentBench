---
title: Blog tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Blog tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Blog tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-BAC711582571D7AB
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4dfe229139b14b47a79a6180a36906f6c821b1cc453b5cffd1e7cbaebc764f41
semantic_inventory:
  - claim_key: CLAIM-BAC711582571D7AB
    claim_text: Blog tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - website.blog_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 110
      end: 156
    subjects:
      - website.blog_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-114'
  recorded_at: '2025-06-09T15:28:03.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-blog-tags-names-trimmed
type: req
---
Blog tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(website): trim blog tag names (WEB-114)

Source: Marketing website decision log (apps/website) - WEB-114
