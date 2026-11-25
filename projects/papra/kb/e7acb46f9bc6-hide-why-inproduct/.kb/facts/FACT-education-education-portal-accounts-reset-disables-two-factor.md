---
title: education.education_portal_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: education.education_portal_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3146AEA3037C8939
claim_text: Resetting the password of an education portal account turns off two-factor authentication, which must be set up again
text_ref: REQ-education-education-portal-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-167'
  recorded_at: '2025-06-02T11:36:01.000Z'
id: FACT-education-education-portal-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of an education portal account turns off two-factor authentication, which must be set up again.

Modeled from REQ-education-education-portal-accounts-reset-and-two-factor so the claim can be checked for contradictions.
