---
title: marketplace.template_tags delete_in_use = detached
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-E6BA8DFD1949CCE5
claim_text: Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use
text_ref: REQ-marketplace-template-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-115'
  recorded_at: '2026-05-20T15:23:39.000Z'
id: FACT-marketplace-template-tags-delete-in-use
type: fact
---
Deleting a template tag in the template marketplace removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-marketplace-template-tags-delete-in-use so the claim can be checked for contradictions.
