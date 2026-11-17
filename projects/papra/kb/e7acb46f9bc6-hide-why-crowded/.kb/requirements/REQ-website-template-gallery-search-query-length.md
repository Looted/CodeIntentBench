---
title: A query in the template gallery search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the template gallery search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the template gallery search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-BAC9878475416DB5
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0284534aadeb72a4360f5d4b4144ebc2590352eb03c2a9b414535463cfb1ca0f
semantic_inventory:
  - claim_key: CLAIM-BAC9878475416DB5
    claim_text: A query in the template gallery search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - website.template_gallery_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 69
      end: 117
    subjects:
      - website.template_gallery_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-256'
  recorded_at: '2025-06-25T11:49:22.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Very long queries were used to slow the search backend down.
id: REQ-website-template-gallery-search-query-length
type: req
---
A query in the template gallery search is limited to 500 characters; longer input is rejected with a validation error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(website): limit search query length to 500 (WEB-256)

Source: Marketing website decision log (apps/website) - WEB-256
