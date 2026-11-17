---
title: BACKOFFICE_SESSION_SECRET is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.
status: active
semantic_text: BACKOFFICE_SESSION_SECRET is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.
semantic_clauses:
  - BACKOFFICE_SESSION_SECRET is rotated every 365 days
  - the previous value stays valid for 48 hours after a rotation
logic_claims:
  - CLAIM-A91BA4DB90E7CB37
  - CLAIM-40B0302E57698F6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6fd1234f57c3f42b12e144e5643b35dec49d5acd7b70c53893ab2bfea7597236
semantic_inventory:
  - claim_key: CLAIM-A91BA4DB90E7CB37
    claim_text: BACKOFFICE_SESSION_SECRET is rotated every 365 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - backoffice.backoffice_session_secret
  - claim_key: CLAIM-40B0302E57698F6D
    claim_text: the previous value stays valid for 48 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 53
      end: 113
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-355'
  recorded_at: '2026-05-15T10:05:47.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Without an overlap, a rotation of the session signing secret broke requests already on their way.
id: REQ-backoffice-backoffice-session-secret-rotation
type: req
---
BACKOFFICE_SESSION_SECRET is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.

## Context

Without an overlap, a rotation of the session signing secret broke requests already on their way.

## Source

> chore(backoffice): rotate BACKOFFICE_SESSION_SECRET every 365 days (OPS-355)

Source: Papra Cloud back office handbook - OPS-355
