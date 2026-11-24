---
title: portal.client_workspaces counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: portal.client_workspaces
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-C298A73870686785
claim_text: Only client workspaces the partner owns count toward the limit in the partner portal
text_ref: REQ-portal-client-workspaces-what-counts
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-286'
  recorded_at: '2026-04-25T13:58:07.000Z'
id: FACT-portal-client-workspaces-counted-toward-limit
type: fact
---
Only client workspaces the partner owns count toward the limit in the partner portal.

Modeled from REQ-portal-client-workspaces-what-counts so the claim can be checked for contradictions.
