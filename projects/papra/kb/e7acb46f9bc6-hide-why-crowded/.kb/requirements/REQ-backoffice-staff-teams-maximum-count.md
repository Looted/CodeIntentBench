---
title: A staff member can have at most 5 staff teams in the Papra Cloud back office; the limit is configured per deployment and 5 is the default.
status: active
semantic_text: A staff member can have at most 5 staff teams in the Papra Cloud back office; the limit is configured per deployment and 5 is the default.
semantic_clauses:
  - A staff member can have at most 5 staff teams in the Papra Cloud back office
  - the limit is configured per deployment and 5 is the default
logic_claims:
  - CLAIM-FB391487C48E2858
  - CLAIM-EE3A84A4255D9DE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7d3742165428e39275c3fd836a84cb78afe53eed581911a26328d65e066aa34
semantic_inventory:
  - claim_key: CLAIM-FB391487C48E2858
    claim_text: A staff member can have at most 5 staff teams in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - backoffice.staff_teams
  - claim_key: CLAIM-EE3A84A4255D9DE5
    claim_text: the limit is configured per deployment and 5 is the default
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 137
    subjects:
      - backoffice.staff_teams
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-514'
  recorded_at: '2025-06-22T09:53:37.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A handful of accounts had created thousands of staff teams and slowed the listing for everyone.
id: REQ-backoffice-staff-teams-maximum-count
type: req
---
A staff member can have at most 5 staff teams in the Papra Cloud back office; the limit is configured per deployment and 5 is the default.

## Context

A handful of accounts had created thousands of staff teams and slowed the listing for everyone.

## Source

> feat(backoffice): limit staff teams per staff member (OPS-514)

Source: Papra Cloud back office handbook - OPS-514
