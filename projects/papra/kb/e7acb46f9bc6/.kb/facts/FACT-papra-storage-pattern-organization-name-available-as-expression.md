---
title: storage_pattern.organization_name available_as_expression = True
status: active
fact_kind: property_value
subject_key: storage_pattern.organization_name
property_key: available_as_expression
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-424DDFE9E8FD7F43
claim_text: Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use
text_ref: REQ-papra-storage-pattern-organization-name
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1529'
  recorded_at: '2026-11-15T22:57:03.180Z'
id: FACT-papra-storage-pattern-organization-name-available-as-expression
type: fact
---
Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use.

Modeled from REQ-papra-storage-pattern-organization-name so the claim can be checked for contradictions.
