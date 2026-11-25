---
title: portal.workspace_templates maximum_count = 150
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: maximum_count
operator: eq
value_type: int
value_int: 150
claim_key: CLAIM-16771A57B1F55EFB
claim_text: The number of workspace templates per partner account in the partner portal is limited to 150
text_ref: REQ-portal-workspace-templates-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-146'
  recorded_at: '2025-06-22T08:48:21.000Z'
id: FACT-portal-workspace-templates-maximum-count
type: fact
---
The number of workspace templates per partner account in the partner portal is limited to 150.

Modeled from REQ-portal-workspace-templates-maximum-count so the claim can be checked for contradictions.
