---
title: n8n.integration_service_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EC69F93FFEE9E899
claim_text: Resetting the password of an integration service account turns off two-factor authentication, which must be set up again
text_ref: REQ-n8n-integration-service-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-215'
  recorded_at: '2026-06-12T13:38:05.000Z'
id: FACT-n8n-integration-service-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of an integration service account turns off two-factor authentication, which must be set up again.

Modeled from REQ-n8n-integration-service-accounts-reset-and-two-factor so the claim can be checked for contradictions.
