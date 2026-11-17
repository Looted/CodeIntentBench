---
title: n8n.integration_service_accounts reset_emails_per_day = 5
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-76DA1025089A0B99
claim_text: At most 5 password reset emails are sent per account per day for integration service accounts
text_ref: REQ-n8n-integration-service-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-186'
  recorded_at: '2025-06-24T16:05:51.000Z'
id: FACT-n8n-integration-service-accounts-reset-emails-per-day
type: fact
---
At most 5 password reset emails are sent per account per day for integration service accounts.

Modeled from REQ-n8n-integration-service-accounts-reset-rate-limit so the claim can be checked for contradictions.
