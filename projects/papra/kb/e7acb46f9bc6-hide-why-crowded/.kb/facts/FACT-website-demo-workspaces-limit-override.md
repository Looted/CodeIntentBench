---
title: website.demo_workspaces limit_override = none
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-9F07ACA95E2BD092
claim_text: The demo workspace limit on the marketing website cannot be changed for an individual visitor
text_ref: REQ-website-demo-workspaces-limit-override
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-413'
  recorded_at: '2026-02-04T08:14:08.000Z'
id: FACT-website-demo-workspaces-limit-override
type: fact
---
The demo workspace limit on the marketing website cannot be changed for an individual visitor.

Modeled from REQ-website-demo-workspaces-limit-override so the claim can be checked for contradictions.
