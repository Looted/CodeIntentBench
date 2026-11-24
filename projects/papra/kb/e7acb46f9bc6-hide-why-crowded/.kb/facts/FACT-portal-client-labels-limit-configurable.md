---
title: portal.client_labels limit_configurable = True
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-73970E3A150076DB
claim_text: the limit is configurable and 25 is the default
text_ref: REQ-portal-client-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-113'
  recorded_at: '2025-09-17T09:33:31.000Z'
id: FACT-portal-client-labels-limit-configurable
type: fact
---
The limit is configurable and 25 is the default.

Modeled from REQ-portal-client-labels-maximum-count so the claim can be checked for contradictions.
