---
title: n8n.integration_service_accounts session_idle_minutes = 60
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F3D76F855733BF57
claim_text: they end after 60 minutes without activity
text_ref: REQ-n8n-integration-service-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-203'
  recorded_at: '2026-05-11T14:13:49.000Z'
id: FACT-n8n-integration-service-accounts-session-idle-minutes
type: fact
---
They end after 60 minutes without activity.

Modeled from REQ-n8n-integration-service-accounts-session-lifetime so the claim can be checked for contradictions.
