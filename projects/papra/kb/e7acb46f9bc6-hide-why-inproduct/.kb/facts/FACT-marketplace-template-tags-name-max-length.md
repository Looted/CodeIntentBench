---
title: marketplace.template_tags name_max_length = 64
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-715C920DA194DBA0
claim_text: Template tag names in the template marketplace are limited to 64 characters
text_ref: REQ-marketplace-template-tags-name-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-111'
  recorded_at: '2026-09-06T08:50:10.000Z'
id: FACT-marketplace-template-tags-name-max-length
type: fact
---
Template tag names in the template marketplace are limited to 64 characters.

Modeled from REQ-marketplace-template-tags-name-length so the claim can be checked for contradictions.
