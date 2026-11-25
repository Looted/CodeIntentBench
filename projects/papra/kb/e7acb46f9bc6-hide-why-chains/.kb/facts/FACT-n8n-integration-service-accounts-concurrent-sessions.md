---
title: n8n.integration_service_accounts concurrent_sessions = 10
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-1B7CED13658E0448
claim_text: An integration service account can have at most 10 sessions at a time
text_ref: REQ-n8n-integration-service-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-204'
  recorded_at: '2026-06-08T10:55:02.000Z'
id: FACT-n8n-integration-service-accounts-concurrent-sessions
type: fact
---
An integration service account can have at most 10 sessions at a time.

Modeled from REQ-n8n-integration-service-accounts-concurrent-sessions so the claim can be checked for contradictions.
