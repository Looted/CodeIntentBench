---
title: portal.workspace_templates limit_configurable = False
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-portal-workspace-templates-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-146'
  recorded_at: '2025-06-22T08:48:21.000Z'
id: FACT-portal-workspace-templates-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-portal-workspace-templates-maximum-count so the claim can be checked for contradictions.
