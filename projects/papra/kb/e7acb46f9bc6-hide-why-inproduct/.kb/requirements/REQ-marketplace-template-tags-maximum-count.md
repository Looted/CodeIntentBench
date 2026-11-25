---
title: A site can hold at most 150 template tags in the template marketplace; the limit is configurable and 150 is the default.
status: active
semantic_text: A site can hold at most 150 template tags in the template marketplace; the limit is configurable and 150 is the default.
semantic_clauses:
  - A site can hold at most 150 template tags in the template marketplace
  - the limit is configurable and 150 is the default
logic_claims:
  - CLAIM-9B01545009BF9E89
  - CLAIM-D7D6BB55704C85FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 795fb33b8dada2ed712f9fa2cc08a520c364c84d4773a4e45969a5aa10c0f85f
semantic_inventory:
  - claim_key: CLAIM-9B01545009BF9E89
    claim_text: A site can hold at most 150 template tags in the template marketplace
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - marketplace.template_tags
  - claim_key: CLAIM-D7D6BB55704C85FF
    claim_text: the limit is configurable and 150 is the default
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 119
    subjects:
      - marketplace.template_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-109'
  recorded_at: '2026-05-05T17:23:49.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Lists of template tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-marketplace-template-tags-maximum-count
type: req
---
A site can hold at most 150 template tags in the template marketplace; the limit is configurable and 150 is the default.

## Context

Lists of template tags are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(marketplace): limit template tags per site (MKT-109)

Source: Template marketplace decision log - MKT-109
