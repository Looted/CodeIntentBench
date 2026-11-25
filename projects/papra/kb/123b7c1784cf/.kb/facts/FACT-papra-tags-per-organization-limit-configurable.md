---
title: tags.per_organization_limit configurable = True
status: active
fact_kind: property_value
subject_key: tags.per_organization_limit
property_key: configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4605BA9C5FA32012
claim_text: An organization can create at most MAX_TAGS_PER_ORGANIZATION tags
text_ref: REQ-papra-max-tags-per-organization
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #900: Added an option to limit the number of tags that can be crea'
  recorded_at: '2026-11-25T19:28:33.394Z'
id: FACT-papra-tags-per-organization-limit-configurable
type: fact
---
An organization can create at most MAX_TAGS_PER_ORGANIZATION tags.

Modeled from REQ-papra-max-tags-per-organization so the claim can be checked for contradictions.
