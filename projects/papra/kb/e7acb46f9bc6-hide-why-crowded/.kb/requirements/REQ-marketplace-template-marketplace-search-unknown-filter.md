---
title: A filter name that the template marketplace search does not know is treated as plain search text.
status: active
semantic_text: A filter name that the template marketplace search does not know is treated as plain search text.
semantic_clauses:
  - A filter name that the template marketplace search does not know is treated as plain search text
logic_claims:
  - CLAIM-8345D81BE41CF88B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c4ba2ccb68bfb2a0a8035aed265e3ba13a6bbc395729dcb6ef3838a1defa5f5
semantic_inventory:
  - claim_key: CLAIM-8345D81BE41CF88B
    claim_text: A filter name that the template marketplace search does not know is treated as plain search text
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - marketplace.template_marketplace_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-183'
  recorded_at: '2026-01-26T12:59:15.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-marketplace-template-marketplace-search-unknown-filter
type: req
---
A filter name that the template marketplace search does not know is treated as plain search text.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(marketplace): unknown search filters (MKT-183)

Source: Template marketplace decision log - MKT-183
