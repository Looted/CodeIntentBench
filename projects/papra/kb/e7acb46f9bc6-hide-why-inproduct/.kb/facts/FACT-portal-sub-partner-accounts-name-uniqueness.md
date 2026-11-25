---
title: portal.sub_partner_accounts name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-12D5C4A96FBEA4C2
claim_text: Sub-partner account names in the partner portal are unique per partner, regardless of letter case
text_ref: REQ-portal-sub-partner-accounts-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-246'
  recorded_at: '2025-04-07T11:19:22.000Z'
id: FACT-portal-sub-partner-accounts-name-uniqueness
type: fact
---
Sub-partner account names in the partner portal are unique per partner, regardless of letter case.

Modeled from REQ-portal-sub-partner-accounts-name-uniqueness so the claim can be checked for contradictions.
