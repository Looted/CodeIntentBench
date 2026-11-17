---
title: support.support_portal_accounts reset_link_minutes = 15
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-D2551FF1858E75D0
claim_text: Password reset links for support portal accounts are valid for 15 minutes
text_ref: REQ-support-support-portal-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-349'
  recorded_at: '2025-09-03T15:34:51.000Z'
id: FACT-support-support-portal-accounts-reset-link-minutes
type: fact
---
Password reset links for support portal accounts are valid for 15 minutes.

Modeled from REQ-support-support-portal-accounts-reset-link-validity so the claim can be checked for contradictions.
