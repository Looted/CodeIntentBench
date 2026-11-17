---
title: portal.workspace_templates empty_name_refused = True
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-portal-workspace-templates-names-trimmed
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-149'
  recorded_at: '2025-12-10T10:21:35.000Z'
id: FACT-portal-workspace-templates-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-portal-workspace-templates-names-trimmed so the claim can be checked for contradictions.
