---
title: A deleted published template in the template marketplace can be restored for 14 days; after that it is removed for good.
status: active
semantic_text: A deleted published template in the template marketplace can be restored for 14 days; after that it is removed for good.
semantic_clauses:
  - A deleted published template in the template marketplace can be restored for 14 days
  - after that it is removed for good
logic_claims:
  - CLAIM-614D618F50FE43C4
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dfee5b62032ccd1dd951b19410b052d9367807a400a9340e25aa8779f6cbaa49
semantic_inventory:
  - claim_key: CLAIM-614D618F50FE43C4
    claim_text: A deleted published template in the template marketplace can be restored for 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - marketplace.published_templates
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 119
    subjects:
      - marketplace.published_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-247'
  recorded_at: '2025-07-05T17:27:40.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-marketplace-published-templates-deletion-grace
type: req
---
A deleted published template in the template marketplace can be restored for 14 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(marketplace): 14-day restore window for published templates (MKT-247)

Source: Template marketplace decision log - MKT-247
