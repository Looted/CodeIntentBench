---
title: BACKOFFICE_SESSION_SECRET must be at least 32 characters long.
status: active
semantic_text: BACKOFFICE_SESSION_SECRET must be at least 32 characters long.
semantic_clauses:
  - BACKOFFICE_SESSION_SECRET must be at least 32 characters long
logic_claims:
  - CLAIM-F567AE3F5BC22E75
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a485ccc3996c811d8c34c4f7738b79f2f4c4fb5c57f67ba63cb9e10a350f1932
semantic_inventory:
  - claim_key: CLAIM-F567AE3F5BC22E75
    claim_text: BACKOFFICE_SESSION_SECRET must be at least 32 characters long
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
  ref: 'Papra Cloud back office handbook: OPS-342'
  recorded_at: '2026-01-02T12:08:07.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Short values of the session signing secret can be guessed offline from one signed value.
id: REQ-backoffice-backoffice-session-secret-minimum-length
type: req
---
BACKOFFICE_SESSION_SECRET must be at least 32 characters long.

## Context

Short values of the session signing secret can be guessed offline from one signed value.

## Why this changed

Reason not stated. OPS-342 replaces the value recorded in OPS-272 without saying why it changed.

## Source

> feat(backoffice): BACKOFFICE_SESSION_SECRET minimum length 32 (OPS-342)

Source: Papra Cloud back office handbook - OPS-342
