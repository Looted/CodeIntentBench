---
title: portal.workspace_templates name_max_length = 100
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-DCABA9D0E7442CE9
claim_text: Workspace template names in the partner portal are limited to 100 characters
text_ref: REQ-portal-workspace-templates-name-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-148'
  recorded_at: '2026-09-15T14:32:37.000Z'
id: FACT-portal-workspace-templates-name-max-length
type: fact
---
Workspace template names in the partner portal are limited to 100 characters.

Modeled from REQ-portal-workspace-templates-name-length so the claim can be checked for contradictions.
