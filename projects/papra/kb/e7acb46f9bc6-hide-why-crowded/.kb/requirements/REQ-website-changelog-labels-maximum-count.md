---
title: At most 20 changelog labels can be created per site on the marketing website; the limit is configurable and 20 is the default.
status: active
semantic_text: At most 20 changelog labels can be created per site on the marketing website; the limit is configurable and 20 is the default.
semantic_clauses:
  - At most 20 changelog labels can be created per site on the marketing website
  - the limit is configurable and 20 is the default
logic_claims:
  - CLAIM-71D8BF435AAC190E
  - CLAIM-2BE806DDCF7A046C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8f27e8bc0c6f05f22aaf5ad1f782670dd1c23862555e86f73f96bb07fa3a5904
semantic_inventory:
  - claim_key: CLAIM-71D8BF435AAC190E
    claim_text: At most 20 changelog labels can be created per site on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - website.changelog_labels
  - claim_key: CLAIM-2BE806DDCF7A046C
    claim_text: the limit is configurable and 20 is the default
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 125
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-171'
  recorded_at: '2026-09-23T15:40:30.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: An unbounded number of changelog labels had been used to store data the feature was never meant for.
id: REQ-website-changelog-labels-maximum-count
type: req
---
At most 20 changelog labels can be created per site on the marketing website; the limit is configurable and 20 is the default.

## Context

An unbounded number of changelog labels had been used to store data the feature was never meant for.

## Source

> feat(website): limit changelog labels per site (WEB-171)

Source: Marketing website decision log (apps/website) - WEB-171
