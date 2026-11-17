---
title: portal.partner_portal_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-19F59B3FAF8B5343
claim_text: Resetting the password of a partner portal account keeps the session that performed the reset and ends all others
text_ref: REQ-portal-partner-portal-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-351'
  recorded_at: '2025-02-04T11:11:36.000Z'
id: FACT-portal-partner-portal-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a partner portal account keeps the session that performed the reset and ends all others.

Modeled from REQ-portal-partner-portal-accounts-reset-and-sessions so the claim can be checked for contradictions.
