---
title: support.support_account_creation plus_addressing = folded
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: plus_addressing
operator: eq
value_type: string
value_string: folded
claim_key: CLAIM-F4E7BCFEF532BD39
claim_text: Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part
text_ref: REQ-support-support-account-creation-plus-addressing
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-270'
  recorded_at: '2025-12-06T11:26:27.000Z'
id: FACT-support-support-account-creation-plus-addressing
type: fact
---
Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part.

Modeled from REQ-support-support-account-creation-plus-addressing so the claim can be checked for contradictions.
