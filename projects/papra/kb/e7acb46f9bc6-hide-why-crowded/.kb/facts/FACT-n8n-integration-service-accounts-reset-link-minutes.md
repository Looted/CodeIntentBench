---
title: n8n.integration_service_accounts reset_link_minutes = 15
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-BF5CE9731D4AA4D1
claim_text: Password reset links for integration service accounts are valid for 15 minutes
text_ref: REQ-n8n-integration-service-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-180'
  recorded_at: '2025-08-21T11:31:59.000Z'
id: FACT-n8n-integration-service-accounts-reset-link-minutes
type: fact
---
Password reset links for integration service accounts are valid for 15 minutes.

Modeled from REQ-n8n-integration-service-accounts-reset-link-validity so the claim can be checked for contradictions.
