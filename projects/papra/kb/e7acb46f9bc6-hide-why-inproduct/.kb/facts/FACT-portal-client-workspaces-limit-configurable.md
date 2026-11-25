---
title: portal.client_workspaces limit_configurable = True
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D032EE70E71E1F3D
claim_text: the limit is configured per deployment and 20 is the default
text_ref: REQ-portal-client-workspaces-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-210'
  recorded_at: '2026-07-27T16:11:54.000Z'
id: FACT-portal-client-workspaces-limit-configurable
type: fact
---
The limit is configured per deployment and 20 is the default.

Modeled from REQ-portal-client-workspaces-maximum-count so the claim can be checked for contradictions.
