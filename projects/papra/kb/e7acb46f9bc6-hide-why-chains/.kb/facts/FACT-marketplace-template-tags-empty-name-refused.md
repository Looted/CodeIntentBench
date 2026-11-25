---
title: marketplace.template_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-marketplace-template-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-112'
  recorded_at: '2026-08-09T10:49:37.000Z'
id: FACT-marketplace-template-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-marketplace-template-tags-names-trimmed so the claim can be checked for contradictions.
