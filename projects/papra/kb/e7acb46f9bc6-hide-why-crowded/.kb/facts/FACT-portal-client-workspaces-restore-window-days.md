---
title: portal.client_workspaces restore_window_days = 60
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F5D7C5A75299F881
claim_text: A deleted client workspace in the partner portal can be restored for 60 days
text_ref: REQ-portal-client-workspaces-deletion-grace
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-303'
  recorded_at: '2026-05-11T13:24:00.000Z'
id: FACT-portal-client-workspaces-restore-window-days
type: fact
---
A deleted client workspace in the partner portal can be restored for 60 days.

Modeled from REQ-portal-client-workspaces-deletion-grace so the claim can be checked for contradictions.
