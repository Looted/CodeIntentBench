---
title: portal.client_labels case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-FE5D20E88D1CAB6F
claim_text: two client labels that differ only by letter case are distinct
text_ref: REQ-portal-client-labels-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-105'
  recorded_at: '2025-11-17T16:23:40.000Z'
id: FACT-portal-client-labels-case-variants-distinct
type: fact
---
Two client labels that differ only by letter case are distinct.

Modeled from REQ-portal-client-labels-case-sensitive-names so the claim can be checked for contradictions.
