---
title: backoffice.staff_teams restore_window_days = 60
status: active
fact_kind: property_value
subject_key: backoffice.staff_teams
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-6EF645C9B21DB081
claim_text: A deleted staff team in the Papra Cloud back office can be restored for 60 days
text_ref: REQ-backoffice-staff-teams-deletion-grace
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-536'
  recorded_at: '2026-03-13T16:27:00.000Z'
id: FACT-backoffice-staff-teams-restore-window-days
type: fact
---
A deleted staff team in the Papra Cloud back office can be restored for 60 days.

Modeled from REQ-backoffice-staff-teams-deletion-grace so the claim can be checked for contradictions.
