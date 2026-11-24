---
title: support.support_account_creation list_precedence = allowed list wins
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: list_precedence
operator: eq
value_type: string
value_string: allowed list wins
claim_key: CLAIM-FE24FF80C1CD21F2
claim_text: the allowed list wins over the block list
text_ref: REQ-support-support-account-creation-blocked-domains
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-269'
  recorded_at: '2025-04-25T11:13:47.000Z'
id: FACT-support-support-account-creation-list-precedence
type: fact
---
The allowed list wins over the block list.

Modeled from REQ-support-support-account-creation-blocked-domains so the claim can be checked for contradictions.
