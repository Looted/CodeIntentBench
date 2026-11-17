---
title: portal.sub_partner_accounts name_max_length = 64
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-29AEC77CCF3E22C1
claim_text: Sub-partner account names in the partner portal are between 3 and 64 characters long
text_ref: REQ-portal-sub-partner-accounts-name-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-319'
  recorded_at: '2026-03-26T10:18:43.000Z'
id: FACT-portal-sub-partner-accounts-name-max-length
type: fact
---
Sub-partner account names in the partner portal are between 3 and 64 characters long.

Modeled from REQ-portal-sub-partner-accounts-name-length so the claim can be checked for contradictions.
