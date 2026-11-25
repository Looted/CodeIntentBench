---
title: marketplace.published_templates name_max_length = 50
status: active
fact_kind: property_value
subject_key: marketplace.published_templates
property_key: name_max_length
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-FBCC8E830B56C1FD
claim_text: Published template names in the template marketplace are between 3 and 50 characters long
text_ref: REQ-marketplace-published-templates-name-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-177'
  recorded_at: '2025-03-10T08:43:17.000Z'
id: FACT-marketplace-published-templates-name-max-length
type: fact
---
Published template names in the template marketplace are between 3 and 50 characters long.

Modeled from REQ-marketplace-published-templates-name-length so the claim can be checked for contradictions.
