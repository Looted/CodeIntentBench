---
title: Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-410903E112136BFA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 946fb6539b2215300f4f9537338394b41358e8e570303de1b6c395f07c4f3a48
semantic_inventory:
  - claim_key: CLAIM-410903E112136BFA
    claim_text: Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 131
    subjects:
      - marketplace.template_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-141'
  recorded_at: '2026-05-22T15:44:24.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-template-categories-delete-in-use
type: req
---
Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(marketplace): deleting a template category detaches it (MKT-141)

Source: Template marketplace decision log - MKT-141
