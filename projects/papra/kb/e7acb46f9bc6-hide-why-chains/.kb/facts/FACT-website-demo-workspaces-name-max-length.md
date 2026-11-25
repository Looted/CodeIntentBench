---
title: website.demo_workspaces name_max_length = 32
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-CD13BB4167A7FD17
claim_text: Demo workspace names on the marketing website are between 3 and 32 characters long
text_ref: REQ-website-demo-workspaces-name-length
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-434'
  recorded_at: '2026-07-26T11:08:39.000Z'
id: FACT-website-demo-workspaces-name-max-length
type: fact
---
Demo workspace names on the marketing website are between 3 and 32 characters long.

Modeled from REQ-website-demo-workspaces-name-length so the claim can be checked for contradictions.
