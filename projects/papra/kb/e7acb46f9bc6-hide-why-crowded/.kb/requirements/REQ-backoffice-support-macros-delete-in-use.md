---
title: Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-1A3C2759347DB4A8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aafee900fc29e635375b2445128bdb49469e12a67c737c57cfa7900d39e57e8f
semantic_inventory:
  - claim_key: CLAIM-1A3C2759347DB4A8
    claim_text: Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 130
    subjects:
      - backoffice.support_macros
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-148'
  recorded_at: '2026-04-17T16:31:35.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Asking for confirmation once per use made cleaning up support macros impractical.
id: REQ-backoffice-support-macros-delete-in-use
type: req
---
Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up support macros impractical.

## Source

> feat(backoffice): deleting a support macro detaches it (OPS-148)

Source: Papra Cloud back office handbook - OPS-148
