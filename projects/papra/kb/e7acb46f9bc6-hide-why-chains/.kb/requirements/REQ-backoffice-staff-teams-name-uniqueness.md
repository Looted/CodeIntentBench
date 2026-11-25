---
title: Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case.
status: active
semantic_text: Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case.
semantic_clauses:
  - Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case
logic_claims:
  - CLAIM-FD7A55C739DAFE53
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b0bf4a973c134b9562167cc8f5bf659efb2c8716d531d5e9326a3d9af1e7f801
semantic_inventory:
  - claim_key: CLAIM-FD7A55C739DAFE53
    claim_text: Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - backoffice.staff_teams
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-531'
  recorded_at: '2025-03-10T12:06:18.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Names are chosen by different people who cannot know what others picked.
id: REQ-backoffice-staff-teams-name-uniqueness
type: req
---
Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case.

## Context

Names are chosen by different people who cannot know what others picked.

## Source

> feat(backoffice): staff team name uniqueness (OPS-531)

Source: Papra Cloud back office handbook - OPS-531
