---
title: support.support_account_creation disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6740FB6E33CB865D
claim_text: Addresses from disposable-mail domains are refused in support portal account creation
text_ref: REQ-support-support-account-creation-blocked-domains
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-269'
  recorded_at: '2025-04-25T11:13:47.000Z'
id: FACT-support-support-account-creation-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in support portal account creation.

Modeled from REQ-support-support-account-creation-blocked-domains so the claim can be checked for contradictions.
