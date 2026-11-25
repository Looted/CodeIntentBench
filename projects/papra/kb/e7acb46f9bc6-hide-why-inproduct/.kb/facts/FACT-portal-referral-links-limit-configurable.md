---
title: portal.referral_links limit_configurable = True
status: active
fact_kind: property_value
subject_key: portal.referral_links
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EE3A84A4255D9DE5
claim_text: the limit is configured per deployment and 5 is the default
text_ref: REQ-portal-referral-links-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-256'
  recorded_at: '2025-05-22T12:40:40.000Z'
id: FACT-portal-referral-links-limit-configurable
type: fact
---
The limit is configured per deployment and 5 is the default.

Modeled from REQ-portal-referral-links-maximum-count so the claim can be checked for contradictions.
