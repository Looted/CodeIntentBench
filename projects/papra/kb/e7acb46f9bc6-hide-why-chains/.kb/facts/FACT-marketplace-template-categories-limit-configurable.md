---
title: marketplace.template_categories limit_configurable = True
status: active
fact_kind: property_value
subject_key: marketplace.template_categories
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6A130CE2C0015ADF
claim_text: the limit is configurable and 500 is the default
text_ref: REQ-marketplace-template-categories-maximum-count
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-127'
  recorded_at: '2026-05-14T10:53:16.000Z'
id: FACT-marketplace-template-categories-limit-configurable
type: fact
---
The limit is configurable and 500 is the default.

Modeled from REQ-marketplace-template-categories-maximum-count so the claim can be checked for contradictions.
