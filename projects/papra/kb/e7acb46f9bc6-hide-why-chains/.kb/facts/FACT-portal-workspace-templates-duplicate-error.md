---
title: portal.workspace_templates duplicate_error = workspace-template-already-exists
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: duplicate_error
operator: eq
value_type: string
value_string: workspace-template-already-exists
claim_key: CLAIM-FD74B07820D66DE7
claim_text: a duplicate is reported as workspace-template-already-exists
text_ref: REQ-portal-workspace-templates-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-144'
  recorded_at: '2025-11-13T11:51:58.000Z'
id: FACT-portal-workspace-templates-duplicate-error
type: fact
---
A duplicate is reported as workspace-template-already-exists.

Modeled from REQ-portal-workspace-templates-unique-ignoring-case so the claim can be checked for contradictions.
