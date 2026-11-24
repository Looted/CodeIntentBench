---
title: Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-E6BA8DFD1949CCE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 280c417c530f02f4bca208e74aaf23c28def77b8d46f968e4f92f524e78ec86d
semantic_inventory:
  - claim_key: CLAIM-E6BA8DFD1949CCE5
    claim_text: Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - marketplace.template_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-115'
  recorded_at: '2026-05-20T15:23:39.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Asking for confirmation once per use made cleaning up template tags impractical.
id: REQ-marketplace-template-tags-delete-in-use
type: req
---
Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up template tags impractical.

## Source

> feat(marketplace): deleting a template tag detaches it (MKT-115)

Source: Template marketplace decision log - MKT-115
