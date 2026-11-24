---
title: n8n.integration_service_accounts sessions_on_email_change = none ended
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-64A340062E440B53
claim_text: Changing the email address of an integration service account does not end any session
text_ref: REQ-n8n-integration-service-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-201'
  recorded_at: '2026-02-07T11:20:27.000Z'
id: FACT-n8n-integration-service-accounts-sessions-on-email-change
type: fact
---
Changing the email address of an integration service account does not end any session.

Modeled from REQ-n8n-integration-service-accounts-email-change so the claim can be checked for contradictions.
