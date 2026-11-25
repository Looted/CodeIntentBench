---
title: Published template names in the template marketplace are unique per author, regardless of letter case.
status: active
semantic_text: Published template names in the template marketplace are unique per author, regardless of letter case.
semantic_clauses:
  - Published template names in the template marketplace are unique per author, regardless of letter case
logic_claims:
  - CLAIM-EB37236FABE29CD6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5a23667406576fbcbcec1641f22d0716c05186c14223d886f415a69d43a3c239
semantic_inventory:
  - claim_key: CLAIM-EB37236FABE29CD6
    claim_text: Published template names in the template marketplace are unique per author, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - marketplace.published_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-240'
  recorded_at: '2026-02-01T13:45:41.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Two published templates with the same name could not be told apart in the switcher.
id: REQ-marketplace-published-templates-name-uniqueness
type: req
---
Published template names in the template marketplace are unique per author, regardless of letter case.

## Context

Two published templates with the same name could not be told apart in the switcher.

## Source

> feat(marketplace): published template name uniqueness (MKT-240)

Source: Template marketplace decision log - MKT-240
