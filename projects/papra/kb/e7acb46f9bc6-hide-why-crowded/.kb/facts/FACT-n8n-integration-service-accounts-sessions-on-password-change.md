---
title: n8n.integration_service_accounts sessions_on_password_change = none ended
status: active
fact_kind: property_value
subject_key: n8n.integration_service_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-71350685B494A25B
claim_text: Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session
text_ref: REQ-n8n-integration-service-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-218'
  recorded_at: '2025-09-16T13:00:10.000Z'
id: FACT-n8n-integration-service-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of an integration service account, as opposed to resetting it, keeps every session.

Modeled from REQ-n8n-integration-service-accounts-password-change so the claim can be checked for contradictions.
