---
title: website.demo_workspaces limit_configurable = False
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-website-demo-workspaces-maximum-count
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-409'
  recorded_at: '2026-02-07T16:35:50.000Z'
id: FACT-website-demo-workspaces-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-website-demo-workspaces-maximum-count so the claim can be checked for contradictions.
