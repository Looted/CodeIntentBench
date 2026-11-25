---
title: storage_pattern.organization_name unique_per_instance = False
status: active
fact_kind: property_value
subject_key: storage_pattern.organization_name
property_key: unique_per_instance
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9C96117D75E04952
claim_text: organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct
text_ref: REQ-papra-storage-pattern-organization-name
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1529'
  recorded_at: '2026-11-16T10:17:52.754Z'
id: FACT-papra-storage-pattern-organization-name-unique-per-instance
type: fact
---
Organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct.

Modeled from REQ-papra-storage-pattern-organization-name so the claim can be checked for contradictions.
