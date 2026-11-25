---
title: support.support_portal_accounts session_idle_minutes = 720
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 720
claim_key: CLAIM-875C1D77291FFCFF
claim_text: they end after 720 minutes without activity
text_ref: REQ-support-support-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-242'
  recorded_at: '2026-01-05T14:20:58.000Z'
id: FACT-support-support-portal-accounts-session-idle-minutes
type: fact
---
They end after 720 minutes without activity.

Modeled from REQ-support-support-portal-accounts-session-lifetime so the claim can be checked for contradictions.
