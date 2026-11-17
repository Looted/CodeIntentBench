---
title: The number of template categories per site in the template marketplace is limited to 500; the limit is configurable and 500 is the default.
status: active
semantic_text: The number of template categories per site in the template marketplace is limited to 500; the limit is configurable and 500 is the default.
semantic_clauses:
  - The number of template categories per site in the template marketplace is limited to 500
  - the limit is configurable and 500 is the default
logic_claims:
  - CLAIM-10F5908BD5BFF250
  - CLAIM-6A130CE2C0015ADF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e5f39699084951db0db15c0ec2bbeb1861e51528093b1f19ed19df4c6355944d
semantic_inventory:
  - claim_key: CLAIM-10F5908BD5BFF250
    claim_text: The number of template categories per site in the template marketplace is limited to 500
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - marketplace.template_categories
  - claim_key: CLAIM-6A130CE2C0015ADF
    claim_text: the limit is configurable and 500 is the default
    role: descriptive
    status: modeled
    span:
      start: 90
      end: 138
    subjects:
      - marketplace.template_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-127'
  recorded_at: '2026-05-14T10:53:16.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: An unbounded number of template categories had been used to store data the feature was never meant for.
id: REQ-marketplace-template-categories-maximum-count
type: req
---
The number of template categories per site in the template marketplace is limited to 500; the limit is configurable and 500 is the default.

## Context

An unbounded number of template categories had been used to store data the feature was never meant for.

## Source

> feat(marketplace): limit template categories per site (MKT-127)

Source: Template marketplace decision log - MKT-127
