---
title: marketplace.published_templates limit_configurable = False
status: active
fact_kind: property_value
subject_key: marketplace.published_templates
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-marketplace-published-templates-maximum-count
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-228'
  recorded_at: '2026-05-28T14:57:09.000Z'
id: FACT-marketplace-published-templates-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-marketplace-published-templates-maximum-count so the claim can be checked for contradictions.
