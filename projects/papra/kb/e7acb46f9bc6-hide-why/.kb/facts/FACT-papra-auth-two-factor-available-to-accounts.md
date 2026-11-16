---
title: auth.two_factor available_to_accounts = True
status: active
fact_kind: property_value
subject_key: auth.two_factor
property_key: available_to_accounts
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4B20F6C274F78F44
claim_text: Accounts can enable two-factor authentication
text_ref: REQ-accounts-can-enable-two-factor-authenticat-63D00769
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #695'
  recorded_at: '2026-11-15T21:45:00.946Z'
id: FACT-papra-auth-two-factor-available-to-accounts
type: fact
---
Accounts can enable two-factor authentication.

Modeled from REQ-accounts-can-enable-two-factor-authenticat-63D00769 so the claim can be checked for contradictions.
