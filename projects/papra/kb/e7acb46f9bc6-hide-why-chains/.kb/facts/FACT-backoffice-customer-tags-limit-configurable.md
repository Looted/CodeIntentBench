---
title: backoffice.customer_tags limit_configurable = False
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-backoffice-customer-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-105'
  recorded_at: '2026-02-09T09:50:10.000Z'
id: FACT-backoffice-customer-tags-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-backoffice-customer-tags-maximum-count so the claim can be checked for contradictions.
