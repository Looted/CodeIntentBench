---
title: tags.per_organization_limit default = 200
status: active
fact_kind: property_value
subject_key: tags.per_organization_limit
property_key: default
operator: eq
value_type: int
value_int: 200
claim_key: CLAIM-EEA159D43C0A77E4
claim_text: the default is 200
text_ref: REQ-papra-max-tags-per-organization
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #900: Added an option to limit the number of tags that can be crea'
  recorded_at: '2026-11-25T19:28:34.095Z'
id: FACT-papra-tags-per-organization-limit-default
type: fact
---
The default is 200.

Modeled from REQ-papra-max-tags-per-organization so the claim can be checked for contradictions.
