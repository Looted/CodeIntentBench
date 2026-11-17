---
title: portal.sub_partner_accounts purged_after_window = True
status: active
fact_kind: property_value
subject_key: portal.sub_partner_accounts
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-portal-sub-partner-accounts-deletion-grace
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-322'
  recorded_at: '2025-03-22T17:32:44.000Z'
id: FACT-portal-sub-partner-accounts-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-portal-sub-partner-accounts-deletion-grace so the claim can be checked for contradictions.
