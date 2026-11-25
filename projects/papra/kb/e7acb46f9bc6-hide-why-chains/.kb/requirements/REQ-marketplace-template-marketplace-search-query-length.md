---
title: A query in the template marketplace search is limited to 512 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the template marketplace search is limited to 512 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the template marketplace search is limited to 512 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-0D2AA2345D127CE1
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4438ee271784bcac29d42d2a2ed16becfb72a698c9be3c473c89c1a240d3d95e
semantic_inventory:
  - claim_key: CLAIM-0D2AA2345D127CE1
    claim_text: A query in the template marketplace search is limited to 512 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - marketplace.template_marketplace_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 122
    subjects:
      - marketplace.template_marketplace_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-147'
  recorded_at: '2026-08-08T12:28:55.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-template-marketplace-search-query-length
type: req
---
A query in the template marketplace search is limited to 512 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(marketplace): limit search query length to 512 (MKT-147)

Source: Template marketplace decision log - MKT-147
