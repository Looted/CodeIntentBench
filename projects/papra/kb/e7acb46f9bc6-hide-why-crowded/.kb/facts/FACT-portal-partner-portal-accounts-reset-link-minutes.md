---
title: portal.partner_portal_accounts reset_link_minutes = 30
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3634C50D4E34A3C5
claim_text: Password reset links for partner portal accounts are valid for 30 minutes
text_ref: REQ-portal-partner-portal-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-354'
  recorded_at: '2025-11-18T12:11:41.000Z'
id: FACT-portal-partner-portal-accounts-reset-link-minutes
type: fact
---
Password reset links for partner portal accounts are valid for 30 minutes.

Modeled from REQ-portal-partner-portal-accounts-reset-link-validity so the claim can be checked for contradictions.
