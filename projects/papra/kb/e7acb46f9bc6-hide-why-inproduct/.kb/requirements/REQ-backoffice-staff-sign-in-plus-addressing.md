---
title: Plus-addressed emails in back office staff sign-in are treated as the same address as the one without the plus part.
status: active
semantic_text: Plus-addressed emails in back office staff sign-in are treated as the same address as the one without the plus part.
semantic_clauses:
  - Plus-addressed emails in back office staff sign-in are treated as the same address as the one without the plus part
logic_claims:
  - CLAIM-EC81C1430FE56A05
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a1ba4a59f889e96f75f3fb9e4b00aaca4512647f68427ddc195778139e25fe19
semantic_inventory:
  - claim_key: CLAIM-EC81C1430FE56A05
    claim_text: Plus-addressed emails in back office staff sign-in are treated as the same address as the one without the plus part
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - backoffice.staff_sign_in
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-212'
  recorded_at: '2026-02-14T14:17:59.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: People use plus addresses to sort their mail, and folding them broke that.
id: REQ-backoffice-staff-sign-in-plus-addressing
type: req
---
Plus-addressed emails in back office staff sign-in are treated as the same address as the one without the plus part.

## Context

People use plus addresses to sort their mail, and folding them broke that.

## Source

> feat(backoffice): plus addressing in staff sign-in (OPS-212)

Source: Papra Cloud back office handbook - OPS-212
