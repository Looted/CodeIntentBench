---
title: Customer tag names in the Papra Cloud back office are limited to 24 characters.
status: active
semantic_text: Customer tag names in the Papra Cloud back office are limited to 24 characters.
semantic_clauses:
  - Customer tag names in the Papra Cloud back office are limited to 24 characters
logic_claims:
  - CLAIM-4A365104E166923A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c1cd4aea5ba37623309382ec3691698e91fe4d066a744c2ced4277437b3617ba
semantic_inventory:
  - claim_key: CLAIM-4A365104E166923A
    claim_text: Customer tag names in the Papra Cloud back office are limited to 24 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-108'
  recorded_at: '2026-07-28T16:26:33.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Longer names broke the layout of the list where customer tags are shown.
id: REQ-backoffice-customer-tags-name-length
type: req
---
Customer tag names in the Papra Cloud back office are limited to 24 characters.

## Context

Longer names broke the layout of the list where customer tags are shown.

## Source

> feat(backoffice): cap customer tag name length at 24 (OPS-108)

Source: Papra Cloud back office handbook - OPS-108
