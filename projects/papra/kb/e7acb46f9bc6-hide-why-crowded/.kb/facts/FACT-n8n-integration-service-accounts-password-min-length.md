---
title: n8n.integration_service_accounts password_min_length = 10
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-F22637242CD4B753
claim_text: Passwords of integration service accounts are at least 10 characters long
text_ref: REQ-n8n-integration-service-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-207'
  recorded_at: '2025-02-23T15:28:21.000Z'
id: FACT-n8n-integration-service-accounts-password-min-length
type: fact
---
Passwords of integration service accounts are at least 10 characters long.

Modeled from REQ-n8n-integration-service-accounts-password-length so the claim can be checked for contradictions.
