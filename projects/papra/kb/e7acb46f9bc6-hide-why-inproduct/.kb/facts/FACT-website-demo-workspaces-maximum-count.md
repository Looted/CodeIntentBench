---
title: website.demo_workspaces maximum_count = 2
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: maximum_count
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-653E7AA28A2B262B
claim_text: The number of demo workspaces per visitor on the marketing website is limited to 2
text_ref: REQ-website-demo-workspaces-maximum-count
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-301'
  recorded_at: '2026-02-07T16:35:50.000Z'
id: FACT-website-demo-workspaces-maximum-count
type: fact
---
The number of demo workspaces per visitor on the marketing website is limited to 2.

Modeled from REQ-website-demo-workspaces-maximum-count so the claim can be checked for contradictions.
