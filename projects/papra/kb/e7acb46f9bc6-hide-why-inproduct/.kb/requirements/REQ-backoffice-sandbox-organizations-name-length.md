---
title: Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long.
status: active
semantic_text: Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long.
semantic_clauses:
  - Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long
logic_claims:
  - CLAIM-876087504500FE15
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2cd41b1a3061e1a1b7a3bbe2b66903b43e514e6f37dcf984cba74a3b88077d56
semantic_inventory:
  - claim_key: CLAIM-876087504500FE15
    claim_text: Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-268'
  recorded_at: '2026-02-22T14:11:38.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-backoffice-sandbox-organizations-name-length
type: req
---
Sandbox organization names in the Papra Cloud back office are between 3 and 100 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(backoffice): sandbox organization name length (OPS-268)

Source: Papra Cloud back office handbook - OPS-268
