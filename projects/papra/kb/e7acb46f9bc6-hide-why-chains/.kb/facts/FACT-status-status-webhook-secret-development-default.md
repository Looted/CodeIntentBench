---
title: status.status_webhook_secret development_default = always required
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-22FC3BD88F1AF097
claim_text: The status page requires STATUS_WEBHOOK_SECRET in every environment, development included
text_ref: REQ-status-status-webhook-secret-development-default
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-234'
  recorded_at: '2026-08-08T13:18:47.000Z'
id: FACT-status-status-webhook-secret-development-default
type: fact
---
The status page requires STATUS_WEBHOOK_SECRET in every environment, development included.

Modeled from REQ-status-status-webhook-secret-development-default so the claim can be checked for contradictions.
