---
title: Sessions of back office staff accounts last at most 7 days; they end after 30 minutes without activity.
status: active
semantic_text: Sessions of back office staff accounts last at most 7 days; they end after 30 minutes without activity.
semantic_clauses:
  - Sessions of back office staff accounts last at most 7 days
  - they end after 30 minutes without activity
logic_claims:
  - CLAIM-241E913CBC391705
  - CLAIM-3547C110EC2A0F3A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa91dc366d0dd122897deec2e006f9e269d6d20707a618461fb143d4a7a6f418
semantic_inventory:
  - claim_key: CLAIM-241E913CBC391705
    claim_text: Sessions of back office staff accounts last at most 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - backoffice.back_office_staff_accounts
  - claim_key: CLAIM-3547C110EC2A0F3A
    claim_text: they end after 30 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 60
      end: 102
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-563'
  recorded_at: '2025-11-09T16:13:01.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Shared computers were left signed in.
id: REQ-backoffice-back-office-staff-accounts-session-lifetime
type: req
---
Sessions of back office staff accounts last at most 7 days; they end after 30 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(backoffice): session lifetime (OPS-563)

Source: Papra Cloud back office handbook - OPS-563
