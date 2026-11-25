---
title: support.support_portal_accounts sessions_ended_on_reset = all sessions
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all sessions
claim_key: CLAIM-C0016CE190ECA819
claim_text: Resetting the password of a support portal account signs out every session of that account
text_ref: REQ-support-support-portal-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-211'
  recorded_at: '2025-07-08T11:43:59.000Z'
id: FACT-support-support-portal-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a support portal account signs out every session of that account.

Modeled from REQ-support-support-portal-accounts-reset-and-sessions so the claim can be checked for contradictions.
