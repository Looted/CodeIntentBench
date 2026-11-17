---
title: n8n.integration_service_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-1B16E7F86FE49682
claim_text: Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does
text_ref: REQ-n8n-integration-service-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-191'
  recorded_at: '2026-01-14T17:07:39.000Z'
id: FACT-n8n-integration-service-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among integration service accounts gives the same answer as for one that does.

Modeled from REQ-n8n-integration-service-accounts-reset-unknown-address so the claim can be checked for contradictions.
