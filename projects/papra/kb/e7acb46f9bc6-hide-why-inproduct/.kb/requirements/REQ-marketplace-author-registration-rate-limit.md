---
title: At most 5 requests per IP address per day are accepted in template author registration.
status: active
semantic_text: At most 5 requests per IP address per day are accepted in template author registration.
semantic_clauses:
  - At most 5 requests per IP address per day are accepted in template author registration
logic_claims:
  - CLAIM-D7A9DA7A16F06E58
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae81deb23134c4530c7feb384a34895a38bbe0b2ba1df2c9f6739437b8d2b0ee
semantic_inventory:
  - claim_key: CLAIM-D7A9DA7A16F06E58
    claim_text: At most 5 requests per IP address per day are accepted in template author registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - marketplace.author_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-152'
  recorded_at: '2025-07-16T15:27:20.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: A script had submitted the form several thousand times in a night.
id: REQ-marketplace-author-registration-rate-limit
type: req
---
At most 5 requests per IP address per day are accepted in template author registration.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(marketplace): rate limit author registration (MKT-152)

Source: Template marketplace decision log - MKT-152
