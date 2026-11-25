---
title: A query in the blog search is limited to 512 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the blog search is limited to 512 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the blog search is limited to 512 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-AB8F34B5F1D86A68
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f0b17e594ad978a7246ba3637f306ad444eb08745a061bb17c929c6edb0fe8f3
semantic_inventory:
  - claim_key: CLAIM-AB8F34B5F1D86A68
    claim_text: A query in the blog search is limited to 512 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - website.blog_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 106
    subjects:
      - website.blog_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-190'
  recorded_at: '2025-11-18T14:57:37.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-blog-search-query-length
type: req
---
A query in the blog search is limited to 512 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(website): limit search query length to 512 (WEB-190)

Source: Marketing website decision log (apps/website) - WEB-190
