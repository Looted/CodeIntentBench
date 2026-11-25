---
title: marketplace.template_tags limit_configurable = True
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D7D6BB55704C85FF
claim_text: the limit is configurable and 150 is the default
text_ref: REQ-marketplace-template-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-109'
  recorded_at: '2026-05-05T17:23:49.000Z'
id: FACT-marketplace-template-tags-limit-configurable
type: fact
---
The limit is configurable and 150 is the default.

Modeled from REQ-marketplace-template-tags-maximum-count so the claim can be checked for contradictions.
