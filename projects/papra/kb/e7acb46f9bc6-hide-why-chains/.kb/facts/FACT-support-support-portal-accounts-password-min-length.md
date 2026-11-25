---
title: support.support_portal_accounts password_min_length = 12
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 12
claim_key: CLAIM-344A56EAE0AE8A04
claim_text: Passwords of support portal accounts are at least 12 characters long
text_ref: REQ-support-support-portal-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-386'
  recorded_at: '2026-01-02T08:20:07.000Z'
id: FACT-support-support-portal-accounts-password-min-length
type: fact
---
Passwords of support portal accounts are at least 12 characters long.

Modeled from REQ-support-support-portal-accounts-password-length so the claim can be checked for contradictions.
