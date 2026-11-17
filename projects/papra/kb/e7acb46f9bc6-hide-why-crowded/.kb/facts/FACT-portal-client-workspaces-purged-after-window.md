---
title: portal.client_workspaces purged_after_window = True
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-portal-client-workspaces-deletion-grace
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-303'
  recorded_at: '2026-05-11T13:24:00.000Z'
id: FACT-portal-client-workspaces-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-portal-client-workspaces-deletion-grace so the claim can be checked for contradictions.
