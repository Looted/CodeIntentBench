---
title: Organization label names in the Papra Cloud back office are limited to 32 characters.
status: active
semantic_text: Organization label names in the Papra Cloud back office are limited to 32 characters.
semantic_clauses:
  - Organization label names in the Papra Cloud back office are limited to 32 characters
logic_claims:
  - CLAIM-A69D814BBA6886E0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d5d17649e756cf2897fa0a7dccd04268027b70df8918dd6a1b9655974c519d2c
semantic_inventory:
  - claim_key: CLAIM-A69D814BBA6886E0
    claim_text: Organization label names in the Papra Cloud back office are limited to 32 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-192'
  recorded_at: '2025-07-03T14:03:27.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The column that stores the name is 32 characters wide.
id: REQ-backoffice-organization-labels-name-length
type: req
---
Organization label names in the Papra Cloud back office are limited to 32 characters.

## Context

The column that stores the name is 32 characters wide.

## Source

> feat(backoffice): cap organization label name length at 32 (OPS-192)

Source: Papra Cloud back office handbook - OPS-192
