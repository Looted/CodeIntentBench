---
title: status.status_webhook_secret minimum_length = 48
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-E773D0EBA85E7F01
claim_text: STATUS_WEBHOOK_SECRET must be at least 48 characters long
text_ref: REQ-status-status-webhook-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-216'
  recorded_at: '2025-11-07T10:38:02.000Z'
id: FACT-status-status-webhook-secret-minimum-length
type: fact
---
STATUS_WEBHOOK_SECRET must be at least 48 characters long.

Modeled from REQ-status-status-webhook-secret-minimum-length so the claim can be checked for contradictions.
