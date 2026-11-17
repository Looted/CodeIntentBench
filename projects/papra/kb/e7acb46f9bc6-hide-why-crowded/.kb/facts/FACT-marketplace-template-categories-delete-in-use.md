---
title: marketplace.template_categories delete_in_use = detached
status: active
fact_kind: property_value
subject_key: marketplace.template_categories
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-410903E112136BFA
claim_text: Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use
text_ref: REQ-marketplace-template-categories-delete-in-use
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-141'
  recorded_at: '2026-05-22T15:44:24.000Z'
id: FACT-marketplace-template-categories-delete-in-use
type: fact
---
Deleting a template category in the template marketplace removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-marketplace-template-categories-delete-in-use so the claim can be checked for contradictions.
