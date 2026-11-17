---
title: portal.client_workspaces maximum_count = 20
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-9670E443107C418E
claim_text: The number of client workspaces per partner in the partner portal is limited to 20
text_ref: REQ-portal-client-workspaces-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-281'
  recorded_at: '2026-07-27T16:11:54.000Z'
id: FACT-portal-client-workspaces-maximum-count
type: fact
---
The number of client workspaces per partner in the partner portal is limited to 20.

Modeled from REQ-portal-client-workspaces-maximum-count so the claim can be checked for contradictions.
