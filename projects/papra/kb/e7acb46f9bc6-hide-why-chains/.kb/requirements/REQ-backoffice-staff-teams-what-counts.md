---
title: Only staff teams the staff member owns count toward the limit in the Papra Cloud back office; staff teams shared with them do not count.
status: active
semantic_text: Only staff teams the staff member owns count toward the limit in the Papra Cloud back office; staff teams shared with them do not count.
semantic_clauses:
  - Only staff teams the staff member owns count toward the limit in the Papra Cloud back office
  - staff teams shared with them do not count
logic_claims:
  - CLAIM-38B5F650D126F0B7
  - CLAIM-5A3C5220265158F1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9666110603cafedc41ca2b97b6f828a5c205c5e9240a6b259ab7a291a942e8ff
semantic_inventory:
  - claim_key: CLAIM-38B5F650D126F0B7
    claim_text: Only staff teams the staff member owns count toward the limit in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - backoffice.staff_teams
  - claim_key: CLAIM-5A3C5220265158F1
    claim_text: staff teams shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 94
      end: 135
    subjects:
      - backoffice.staff_teams
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-522'
  recorded_at: '2025-11-08T09:10:58.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Archiving had become a way around the limit.
id: REQ-backoffice-staff-teams-what-counts
type: req
---
Only staff teams the staff member owns count toward the limit in the Papra Cloud back office; staff teams shared with them do not count.

## Context

Archiving had become a way around the limit.

## Source

> feat(backoffice): which staff teams count toward the limit (OPS-522)

Source: Papra Cloud back office handbook - OPS-522
