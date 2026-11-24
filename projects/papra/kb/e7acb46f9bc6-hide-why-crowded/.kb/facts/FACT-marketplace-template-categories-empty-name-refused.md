---
title: marketplace.template_categories empty_name_refused = True
status: active
fact_kind: property_value
subject_key: marketplace.template_categories
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-marketplace-template-categories-names-trimmed
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-132'
  recorded_at: '2026-02-24T16:11:59.000Z'
id: FACT-marketplace-template-categories-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-marketplace-template-categories-names-trimmed so the claim can be checked for contradictions.
