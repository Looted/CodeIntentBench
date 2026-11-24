---
title: marketplace.published_templates maximum_count = 3
status: deprecated
fact_kind: property_value
subject_key: marketplace.published_templates
property_key: maximum_count
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-DBBDD1B3E0A86A95
claim_text: An author can own at most 3 published templates in the template marketplace
text_ref: REQ-marketplace-published-templates-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-188'
  recorded_at: '2026-04-21T17:52:24.000Z'
id: FACT-marketplace-published-templates-maximum-count-earlier
type: fact
---
An author can own at most 3 published templates in the template marketplace.

Modeled from REQ-marketplace-published-templates-maximum-count-earlier so the claim can be checked for contradictions.
