---
title: portal.sub_partner_accounts maximum_count = 100
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: maximum_count
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-D568A3AA6F72AECA
claim_text: A partner can have at most 100 sub-partner accounts in the partner portal
text_ref: REQ-portal-sub-partner-accounts-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-311'
  recorded_at: '2026-09-17T13:31:33.000Z'
id: FACT-portal-sub-partner-accounts-maximum-count
type: fact
---
A partner can have at most 100 sub-partner accounts in the partner portal.

Modeled from REQ-portal-sub-partner-accounts-maximum-count so the claim can be checked for contradictions.
