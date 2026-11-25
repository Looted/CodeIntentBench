---
title: education.education_portal_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: education.education_portal_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-BCA2797B1FF81B61
claim_text: Asking for a password reset for an address that has no account among education portal accounts gives the same answer as for one that does
text_ref: REQ-education-education-portal-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-292'
  recorded_at: '2025-05-13T12:06:37.000Z'
id: FACT-education-education-portal-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among education portal accounts gives the same answer as for one that does.

Modeled from REQ-education-education-portal-accounts-reset-unknown-address so the claim can be checked for contradictions.
