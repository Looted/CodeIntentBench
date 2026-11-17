---
title: 'An invalid date in the published: filter of the blog search is rejected with a message that names the value.'
status: active
semantic_text: 'An invalid date in the published: filter of the blog search is rejected with a message that names the value.'
semantic_clauses:
  - 'An invalid date in the published: filter of the blog search is rejected with a message that names the value'
logic_claims:
  - CLAIM-2B10FDD8D9733DC8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 18c0d5ac126025a514fbca9cd6dba8b6da355b3189193345903a8c5acd00fa28
semantic_inventory:
  - claim_key: CLAIM-2B10FDD8D9733DC8
    claim_text: 'An invalid date in the published: filter of the blog search is rejected with a message that names the value'
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - website.blog_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-217'
  recorded_at: '2025-08-22T13:38:40.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-website-blog-search-invalid-date
type: req
---
An invalid date in the published: filter of the blog search is rejected with a message that names the value.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(website): invalid date in published: filter (WEB-217)

Source: Marketing website decision log (apps/website) - WEB-217
