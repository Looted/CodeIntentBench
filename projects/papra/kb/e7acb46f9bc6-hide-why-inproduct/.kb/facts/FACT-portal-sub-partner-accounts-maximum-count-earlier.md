---
title: portal.sub_partner_accounts maximum_count = 1
status: deprecated
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: maximum_count
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-EC5D2C77C64C915F
claim_text: A partner can have at most 1 sub-partner accounts in the partner portal
text_ref: REQ-portal-sub-partner-accounts-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-200'
  recorded_at: '2026-03-06T11:29:50.000Z'
id: FACT-portal-sub-partner-accounts-maximum-count-earlier
type: fact
---
A partner can have at most 1 sub-partner accounts in the partner portal.

Modeled from REQ-portal-sub-partner-accounts-maximum-count-earlier so the claim can be checked for contradictions.
