---
title: support.support_portal_accounts session_days = 90
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-225C32A55454FEDE
claim_text: Sessions of support portal accounts last at most 90 days
text_ref: REQ-support-support-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-242'
  recorded_at: '2026-01-05T14:20:58.000Z'
id: FACT-support-support-portal-accounts-session-days
type: fact
---
Sessions of support portal accounts last at most 90 days.

Modeled from REQ-support-support-portal-accounts-session-lifetime so the claim can be checked for contradictions.
