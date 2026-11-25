---
title: education.education_portal_accounts session_idle_minutes = 60
status: active
fact_kind: property_value
subject_key: education.education_portal_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F3D76F855733BF57
claim_text: they end after 60 minutes without activity
text_ref: REQ-education-education-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-155'
  recorded_at: '2025-06-09T15:16:30.000Z'
id: FACT-education-education-portal-accounts-session-idle-minutes
type: fact
---
They end after 60 minutes without activity.

Modeled from REQ-education-education-portal-accounts-session-lifetime so the claim can be checked for contradictions.
