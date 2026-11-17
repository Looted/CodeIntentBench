---
title: BACKOFFICE_SESSION_SECRET must be at least 12 characters long.
status: closed
semantic_text: BACKOFFICE_SESSION_SECRET must be at least 12 characters long.
semantic_clauses:
  - BACKOFFICE_SESSION_SECRET must be at least 12 characters long
logic_claims:
  - CLAIM-BA3A70E4D6B5FC0D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b2257553272ea5f979c01e2879add8ab0cd887d9dab219914df40eacbfa3b0d9
semantic_inventory:
  - claim_key: CLAIM-BA3A70E4D6B5FC0D
    claim_text: BACKOFFICE_SESSION_SECRET must be at least 12 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-272'
  recorded_at: '2025-08-12T16:05:36.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-backoffice-session-secret-minimum-length-earlier
type: req
---
BACKOFFICE_SESSION_SECRET must be at least 12 characters long.

## Context

Reason not stated.

## Source

> feat(backoffice): BACKOFFICE_SESSION_SECRET minimum length 32 (OPS-272)

Source: Papra Cloud back office handbook - OPS-272
