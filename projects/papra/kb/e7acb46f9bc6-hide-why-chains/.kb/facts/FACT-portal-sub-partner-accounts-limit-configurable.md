---
title: portal.sub_partner_accounts limit_configurable = False
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-portal-sub-partner-accounts-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-311'
  recorded_at: '2026-09-17T13:31:33.000Z'
id: FACT-portal-sub-partner-accounts-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-portal-sub-partner-accounts-maximum-count so the claim can be checked for contradictions.
