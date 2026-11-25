---
title: website.demo_workspaces restore_window_days = 30
status: active
fact_kind: property_value
subject_key: website.demo_workspaces
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-9A9D5D4F8207D01E
claim_text: A deleted demo workspace on the marketing website can be restored for 30 days
text_ref: REQ-website-demo-workspaces-deletion-grace
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-329'
  recorded_at: '2025-04-22T11:28:46.000Z'
id: FACT-website-demo-workspaces-restore-window-days
type: fact
---
A deleted demo workspace on the marketing website can be restored for 30 days.

Modeled from REQ-website-demo-workspaces-deletion-grace so the claim can be checked for contradictions.
