---
title: marketplace.template_tags case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: marketplace.template_tags
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A2A0BEEC477470F6
claim_text: two template tags that differ only by letter case are distinct
text_ref: REQ-marketplace-template-tags-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-108'
  recorded_at: '2026-02-10T12:41:42.000Z'
id: FACT-marketplace-template-tags-case-variants-distinct
type: fact
---
Two template tags that differ only by letter case are distinct.

Modeled from REQ-marketplace-template-tags-case-sensitive-names so the claim can be checked for contradictions.
