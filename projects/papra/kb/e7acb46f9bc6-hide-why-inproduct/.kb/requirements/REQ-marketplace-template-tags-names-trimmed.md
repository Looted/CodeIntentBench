---
title: Template tag names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is r…
status: active
semantic_text: Template tag names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Template tag names in the template marketplace are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-E427128C9C408E7D
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a2f7a076d09f6b0821b636aabe0c537445e23c14d046b103d84bdf29135b45f
semantic_inventory:
  - claim_key: CLAIM-E427128C9C408E7D
    claim_text: Template tag names in the template marketplace are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - marketplace.template_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 117
      end: 163
    subjects:
      - marketplace.template_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-112'
  recorded_at: '2026-08-09T10:49:37.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Pasted names carried trailing spaces and produced template tags that looked identical but were not.
id: REQ-marketplace-template-tags-names-trimmed
type: req
---
Template tag names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced template tags that looked identical but were not.

## Source

> fix(marketplace): trim template tag names (MKT-112)

Source: Template marketplace decision log - MKT-112
