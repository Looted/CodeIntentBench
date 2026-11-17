---
title: marketplace.published_templates restore_window_days = 14
status: active
fact_kind: property_value
subject_key: marketplace.published_templates
property_key: restore_window_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-614D618F50FE43C4
claim_text: A deleted published template in the template marketplace can be restored for 14 days
text_ref: REQ-marketplace-published-templates-deletion-grace
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-247'
  recorded_at: '2025-07-05T17:27:40.000Z'
id: FACT-marketplace-published-templates-restore-window-days
type: fact
---
A deleted published template in the template marketplace can be restored for 14 days.

Modeled from REQ-marketplace-published-templates-deletion-grace so the claim can be checked for contradictions.
