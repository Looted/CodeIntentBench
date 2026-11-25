---
title: Template category names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming…
status: active
semantic_text: Template category names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Template category names in the template marketplace are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-44DEA13C8AD1FA03
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de875f0d5d2e604635f92629ac5d9258c95e1652c81d0f9eccd3f1bc60a621f8
semantic_inventory:
  - claim_key: CLAIM-44DEA13C8AD1FA03
    claim_text: Template category names in the template marketplace are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - marketplace.template_categories
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 122
      end: 168
    subjects:
      - marketplace.template_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-132'
  recorded_at: '2026-02-24T16:11:59.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-template-categories-names-trimmed
type: req
---
Template category names in the template marketplace are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(marketplace): trim template category names (MKT-132)

Source: Template marketplace decision log - MKT-132
