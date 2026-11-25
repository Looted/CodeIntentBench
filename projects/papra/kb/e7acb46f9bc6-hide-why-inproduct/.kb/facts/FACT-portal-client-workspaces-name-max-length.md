---
title: portal.client_workspaces name_max_length = 100
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-B1522BF904E536A1
claim_text: Client workspace names in the partner portal are between 3 and 100 characters long
text_ref: REQ-portal-client-workspaces-name-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-229'
  recorded_at: '2025-11-21T09:21:14.000Z'
id: FACT-portal-client-workspaces-name-max-length
type: fact
---
Client workspace names in the partner portal are between 3 and 100 characters long.

Modeled from REQ-portal-client-workspaces-name-length so the claim can be checked for contradictions.
