---
title: An author can own at most 25 published templates in the template marketplace; the limit is the same for everyone.
status: active
semantic_text: An author can own at most 25 published templates in the template marketplace; the limit is the same for everyone.
semantic_clauses:
  - An author can own at most 25 published templates in the template marketplace
  - the limit is the same for everyone
logic_claims:
  - CLAIM-2509FF6CF84C50E5
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cf30fbf800abc6c395d505ae1d3f9ef51fb61c3469128ff85fe383ccba5e8d89
semantic_inventory:
  - claim_key: CLAIM-2509FF6CF84C50E5
    claim_text: An author can own at most 25 published templates in the template marketplace
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - marketplace.published_templates
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 112
    subjects:
      - marketplace.published_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-228'
  recorded_at: '2026-05-28T14:57:09.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: A handful of accounts had created thousands of published templates and slowed the listing for everyone.
id: REQ-marketplace-published-templates-maximum-count
type: req
---
An author can own at most 25 published templates in the template marketplace; the limit is the same for everyone.

## Context

A handful of accounts had created thousands of published templates and slowed the listing for everyone.

## Why this changed

Reason not stated. MKT-228 replaces the value recorded in MKT-188 without saying why it changed.

## Source

> feat(marketplace): limit published templates per author (MKT-228)

Source: Template marketplace decision log - MKT-228
