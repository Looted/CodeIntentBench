---
title: portal.workspace_templates delete_in_use = refused
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-8807D01A3B8F4C21
claim_text: Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it
text_ref: REQ-portal-workspace-templates-delete-in-use
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-159'
  recorded_at: '2025-05-24T09:31:55.000Z'
id: FACT-portal-workspace-templates-delete-in-use
type: fact
---
Deleting a workspace template in the partner portal that is still in use is refused until nothing refers to it.

Modeled from REQ-portal-workspace-templates-delete-in-use so the claim can be checked for contradictions.
