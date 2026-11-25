---
title: portal.referral_links name_max_length = 80
status: active
fact_kind: property_value
subject_key: portal.referral_links
property_key: name_max_length
operator: eq
value_type: int
value_int: 80
claim_key: CLAIM-9B0FFFC982F70C2A
claim_text: Referral link names in the partner portal are between 3 and 80 characters long
text_ref: REQ-portal-referral-links-name-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-269'
  recorded_at: '2026-09-22T10:41:53.000Z'
id: FACT-portal-referral-links-name-max-length
type: fact
---
Referral link names in the partner portal are between 3 and 80 characters long.

Modeled from REQ-portal-referral-links-name-length so the claim can be checked for contradictions.
