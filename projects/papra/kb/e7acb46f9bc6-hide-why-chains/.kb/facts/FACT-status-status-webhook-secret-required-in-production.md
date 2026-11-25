---
title: status.status_webhook_secret required_in_production = True
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1D9C934E5AB634C5
claim_text: The status page refuses to start in production without STATUS_WEBHOOK_SECRET
text_ref: REQ-status-status-webhook-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-215'
  recorded_at: '2025-04-18T10:30:39.000Z'
id: FACT-status-status-webhook-secret-required-in-production
type: fact
---
The status page refuses to start in production without STATUS_WEBHOOK_SECRET.

Modeled from REQ-status-status-webhook-secret-required-in-production so the claim can be checked for contradictions.
