---
title: portal.workspace_templates name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: portal.workspace_templates
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-147F762BF2748B96
claim_text: Workspace templates in the partner portal are unique per partner account regardless of letter case
text_ref: REQ-portal-workspace-templates-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-144'
  recorded_at: '2025-11-13T11:51:58.000Z'
id: FACT-portal-workspace-templates-name-uniqueness
type: fact
---
Workspace templates in the partner portal are unique per partner account regardless of letter case.

Modeled from REQ-portal-workspace-templates-unique-ignoring-case so the claim can be checked for contradictions.
