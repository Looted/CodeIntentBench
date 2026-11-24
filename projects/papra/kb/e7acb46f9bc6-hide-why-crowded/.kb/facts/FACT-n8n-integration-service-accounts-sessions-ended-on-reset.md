---
title: n8n.integration_service_accounts sessions_ended_on_reset = none
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-6DA968BA84D096B4
claim_text: Resetting the password of an integration service account leaves existing sessions signed in until they expire
text_ref: REQ-n8n-integration-service-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-172'
  recorded_at: '2025-12-28T17:17:59.000Z'
id: FACT-n8n-integration-service-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of an integration service account leaves existing sessions signed in until they expire.

Modeled from REQ-n8n-integration-service-accounts-reset-and-sessions so the claim can be checked for contradictions.
