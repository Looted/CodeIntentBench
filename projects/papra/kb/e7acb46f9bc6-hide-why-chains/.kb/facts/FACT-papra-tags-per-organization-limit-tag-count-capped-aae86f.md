---
title: tags.per_organization_limit tag_count_capped = False
status: deprecated
fact_kind: property_value
subject_key: tags.per_organization_limit
property_key: tag_count_capped
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-406FE166D1F8B5A1
claim_text: An organization can create any number of tags
text_ref: REQ-papra-organization-tags-uncapped
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-164'
  recorded_at: '2025-12-02T10:41:05.000Z'
id: FACT-papra-tags-per-organization-limit-tag-count-capped-aae86f
type: fact
---
An organization can create any number of tags.

Modeled from REQ-papra-organization-tags-uncapped so the claim can be checked for contradictions.
