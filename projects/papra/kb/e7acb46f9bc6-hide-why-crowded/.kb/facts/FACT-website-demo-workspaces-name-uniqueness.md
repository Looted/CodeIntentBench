---
title: website.demo_workspaces name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-104C23D301C081E9
claim_text: Demo workspace names on the marketing website are unique per visitor, regardless of letter case
text_ref: REQ-website-demo-workspaces-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-426'
  recorded_at: '2026-03-26T11:57:35.000Z'
id: FACT-website-demo-workspaces-name-uniqueness
type: fact
---
Demo workspace names on the marketing website are unique per visitor, regardless of letter case.

Modeled from REQ-website-demo-workspaces-name-uniqueness so the claim can be checked for contradictions.
