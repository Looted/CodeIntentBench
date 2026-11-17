---
title: n8n.integration_service_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-n8n-integration-service-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-204'
  recorded_at: '2026-06-08T10:55:02.000Z'
id: FACT-n8n-integration-service-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-n8n-integration-service-accounts-concurrent-sessions so the claim can be checked for contradictions.
