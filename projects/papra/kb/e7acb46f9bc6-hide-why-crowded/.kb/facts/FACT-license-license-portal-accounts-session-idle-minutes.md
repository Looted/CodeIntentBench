---
title: license.license_portal_accounts session_idle_minutes = 60
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F3D76F855733BF57
claim_text: they end after 60 minutes without activity
text_ref: REQ-license-license-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-275'
  recorded_at: '2025-05-28T09:55:13.000Z'
id: FACT-license-license-portal-accounts-session-idle-minutes
type: fact
---
They end after 60 minutes without activity.

Modeled from REQ-license-license-portal-accounts-session-lifetime so the claim can be checked for contradictions.
