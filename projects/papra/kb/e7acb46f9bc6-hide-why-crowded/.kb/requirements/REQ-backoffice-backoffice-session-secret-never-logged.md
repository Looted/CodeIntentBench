---
title: The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-637CF41C1DAE281D
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 632dc0aef8a43ac685c21c337c7102a0b89e0a238dd5d71559369777c3037208
semantic_inventory:
  - claim_key: CLAIM-637CF41C1DAE281D
    claim_text: The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - backoffice.backoffice_session_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 135
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-357'
  recorded_at: '2025-11-20T08:22:51.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-backoffice-backoffice-session-secret-never-logged
type: req
---
The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(backoffice): keep BACKOFFICE_SESSION_SECRET out of logs (OPS-357)

Source: Papra Cloud back office handbook - OPS-357
