---
title: n8n.integration_service_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DAA8F9597563674B
claim_text: A completed password reset for integration service accounts is confirmed by an email to the account address
text_ref: REQ-n8n-integration-service-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-199'
  recorded_at: '2026-01-05T15:04:57.000Z'
id: FACT-n8n-integration-service-accounts-reset-confirmation-email
type: fact
---
A completed password reset for integration service accounts is confirmed by an email to the account address.

Modeled from REQ-n8n-integration-service-accounts-reset-notification so the claim can be checked for contradictions.
