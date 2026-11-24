---
title: Customer tags in the Papra Cloud back office are listed by most recent use first.
status: active
semantic_text: Customer tags in the Papra Cloud back office are listed by most recent use first.
semantic_clauses:
  - Customer tags in the Papra Cloud back office are listed by most recent use first
logic_claims:
  - CLAIM-A45D0BFEEE952B8F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b090e0ebc071cb8c58ea4183183639cb42fcdd16a6ba0781497cabfa7ad8603
semantic_inventory:
  - claim_key: CLAIM-A45D0BFEEE952B8F
    claim_text: Customer tags in the Papra Cloud back office are listed by most recent use first
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-117'
  recorded_at: '2025-11-15T10:11:42.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: People looked for a customer tag by name and could not find it in a list ordered by creation.
id: REQ-backoffice-customer-tags-listing-order
type: req
---
Customer tags in the Papra Cloud back office are listed by most recent use first.

## Context

People looked for a customer tag by name and could not find it in a list ordered by creation.

## Source

> feat(backoffice): order customer tags by most recent use first (OPS-117)

Source: Papra Cloud back office handbook - OPS-117
