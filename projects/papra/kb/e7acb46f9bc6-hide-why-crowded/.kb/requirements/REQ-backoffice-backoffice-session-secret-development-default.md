---
title: The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set.
status: active
semantic_text: The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set.
semantic_clauses:
  - The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set
logic_claims:
  - CLAIM-F5ADB1E837972A02
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c0efb2f6eff71d88fe9ddb64a3160a05d931375c0e39b93fbf514f73593150a9
semantic_inventory:
  - claim_key: CLAIM-F5ADB1E837972A02
    claim_text: The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-365'
  recorded_at: '2026-06-11T12:05:00.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-backoffice-session-secret-development-default
type: req
---
The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set.

## Context

Reason not stated.

## Source

> feat(backoffice): BACKOFFICE_SESSION_SECRET outside production (OPS-365)

Source: Papra Cloud back office handbook - OPS-365
