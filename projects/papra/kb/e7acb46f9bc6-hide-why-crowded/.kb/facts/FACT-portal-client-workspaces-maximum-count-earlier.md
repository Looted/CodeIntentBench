---
title: portal.client_workspaces maximum_count = 10
status: deprecated
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-26C2708740E09E2E
claim_text: The number of client workspaces per partner in the partner portal is limited to 10
text_ref: REQ-portal-client-workspaces-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-211'
  recorded_at: '2026-07-19T15:11:01.000Z'
id: FACT-portal-client-workspaces-maximum-count-earlier
type: fact
---
The number of client workspaces per partner in the partner portal is limited to 10.

Modeled from REQ-portal-client-workspaces-maximum-count-earlier so the claim can be checked for contradictions.
