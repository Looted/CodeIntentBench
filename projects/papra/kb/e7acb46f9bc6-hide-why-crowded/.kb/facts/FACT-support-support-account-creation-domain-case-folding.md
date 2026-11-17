---
title: support.support_account_creation domain_case_folding = True
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: domain_case_folding
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-77F80A293A9D87BD
claim_text: matching ignores letter case
text_ref: REQ-support-support-account-creation-allowed-domains
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-266'
  recorded_at: '2025-10-28T15:28:18.000Z'
id: FACT-support-support-account-creation-domain-case-folding
type: fact
---
Matching ignores letter case.

Modeled from REQ-support-support-account-creation-allowed-domains so the claim can be checked for contradictions.
