---
title: support.support_portal_accounts reset_link_minutes = 10
status: deprecated
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-B1A80961E8B2D215
claim_text: Password reset links for support portal accounts are valid for 10 minutes
text_ref: REQ-support-support-portal-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-172'
  recorded_at: '2025-03-24T15:24:59.000Z'
id: FACT-support-support-portal-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for support portal accounts are valid for 10 minutes.

Modeled from REQ-support-support-portal-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
