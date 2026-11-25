---
title: portal.workspace_templates name_trimmed = True
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-93C2919A36A11E86
claim_text: Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-portal-workspace-templates-names-trimmed
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-149'
  recorded_at: '2025-12-10T10:21:35.000Z'
id: FACT-portal-workspace-templates-name-trimmed
type: fact
---
Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-portal-workspace-templates-names-trimmed so the claim can be checked for contradictions.
