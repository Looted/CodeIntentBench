---
title: support.support_portal_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-8D41AA67CDE2BB6A
claim_text: Asking for a password reset for an address that has no account among support portal accounts gives the same answer as for one that does
text_ref: REQ-support-support-portal-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-223'
  recorded_at: '2025-09-23T12:47:34.000Z'
id: FACT-support-support-portal-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among support portal accounts gives the same answer as for one that does.

Modeled from REQ-support-support-portal-accounts-reset-unknown-address so the claim can be checked for contradictions.
