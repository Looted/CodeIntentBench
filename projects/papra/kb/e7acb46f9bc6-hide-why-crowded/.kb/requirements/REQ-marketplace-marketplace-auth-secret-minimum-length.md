---
title: MARKETPLACE_AUTH_SECRET must be at least 48 characters long.
status: active
semantic_text: MARKETPLACE_AUTH_SECRET must be at least 48 characters long.
semantic_clauses:
  - MARKETPLACE_AUTH_SECRET must be at least 48 characters long
logic_claims:
  - CLAIM-83C063B87B37D3DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f1b57cfd219d44d8949efe1651b7e875031355c6016b341688d0b36497eb273a
semantic_inventory:
  - claim_key: CLAIM-83C063B87B37D3DB
    claim_text: MARKETPLACE_AUTH_SECRET must be at least 48 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-191'
  recorded_at: '2025-11-08T10:12:14.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Short values of the session signing secret can be guessed offline from one signed value.
id: REQ-marketplace-marketplace-auth-secret-minimum-length
type: req
---
MARKETPLACE_AUTH_SECRET must be at least 48 characters long.

## Context

Short values of the session signing secret can be guessed offline from one signed value.

## Why this changed

Reason not stated. MKT-191 replaces the value recorded in MKT-121 without saying why it changed.

## Source

> feat(marketplace): MARKETPLACE_AUTH_SECRET minimum length 48 (MKT-191)

Source: Template marketplace decision log - MKT-191
