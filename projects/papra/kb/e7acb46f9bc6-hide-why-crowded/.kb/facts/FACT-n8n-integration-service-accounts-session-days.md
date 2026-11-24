---
title: n8n.integration_service_accounts session_days = 1
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-39D9E2505DFB4890
claim_text: Sessions of integration service accounts last at most 1 day
text_ref: REQ-n8n-integration-service-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-203'
  recorded_at: '2026-05-11T14:13:49.000Z'
id: FACT-n8n-integration-service-accounts-session-days
type: fact
---
Sessions of integration service accounts last at most 1 day.

Modeled from REQ-n8n-integration-service-accounts-session-lifetime so the claim can be checked for contradictions.
