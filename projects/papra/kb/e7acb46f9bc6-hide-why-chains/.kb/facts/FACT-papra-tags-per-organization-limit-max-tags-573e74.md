---
title: tags.per_organization_limit max_tags = 100
status: deprecated
fact_kind: property_value
subject_key: tags.per_organization_limit
property_key: max_tags
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-EE91308C106AF803
claim_text: An organization can create at most 100 tags
text_ref: REQ-papra-organization-tag-count-cap
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-118'
  recorded_at: '2025-07-14T09:12:40.000Z'
id: FACT-papra-tags-per-organization-limit-max-tags-573e74
type: fact
---
An organization can create at most 100 tags.

Modeled from REQ-papra-organization-tag-count-cap so the claim can be checked for contradictions.
