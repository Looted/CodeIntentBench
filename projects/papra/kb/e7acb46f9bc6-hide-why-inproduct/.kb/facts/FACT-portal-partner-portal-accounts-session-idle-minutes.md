---
title: portal.partner_portal_accounts session_idle_minutes = 30
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3547C110EC2A0F3A
claim_text: they end after 30 minutes without activity
text_ref: REQ-portal-partner-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-298'
  recorded_at: '2025-11-14T08:32:18.000Z'
id: FACT-portal-partner-portal-accounts-session-idle-minutes
type: fact
---
They end after 30 minutes without activity.

Modeled from REQ-portal-partner-portal-accounts-session-lifetime so the claim can be checked for contradictions.
