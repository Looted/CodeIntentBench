---
title: portal.client_workspaces name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-8C0459D657B07F4F
claim_text: Client workspace names in the partner portal are unique per partner, regardless of letter case
text_ref: REQ-portal-client-workspaces-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-295'
  recorded_at: '2026-08-18T13:37:41.000Z'
id: FACT-portal-client-workspaces-name-uniqueness
type: fact
---
Client workspace names in the partner portal are unique per partner, regardless of letter case.

Modeled from REQ-portal-client-workspaces-name-uniqueness so the claim can be checked for contradictions.
