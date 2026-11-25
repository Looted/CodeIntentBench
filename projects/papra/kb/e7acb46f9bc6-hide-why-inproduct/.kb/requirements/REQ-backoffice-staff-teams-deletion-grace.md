---
title: A deleted staff team in the Papra Cloud back office can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted staff team in the Papra Cloud back office can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted staff team in the Papra Cloud back office can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-6EF645C9B21DB081
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cc4cd9078afb5ed63a29cc62dec04e698ccbda6e458070bb468a390a901986e2
semantic_inventory:
  - claim_key: CLAIM-6EF645C9B21DB081
    claim_text: A deleted staff team in the Papra Cloud back office can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - backoffice.staff_teams
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 114
    subjects:
      - backoffice.staff_teams
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-300'
  recorded_at: '2026-03-13T16:27:00.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-backoffice-staff-teams-deletion-grace
type: req
---
A deleted staff team in the Papra Cloud back office can be restored for 60 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(backoffice): 60-day restore window for staff teams (OPS-300)

Source: Papra Cloud back office handbook - OPS-300
