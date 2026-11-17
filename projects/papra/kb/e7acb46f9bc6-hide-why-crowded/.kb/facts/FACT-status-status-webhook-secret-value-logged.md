---
title: status.status_webhook_secret value_logged = False
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-DB2FE21A2BFF4F1A
claim_text: The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs
text_ref: REQ-status-status-webhook-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-233'
  recorded_at: '2025-02-20T17:51:39.000Z'
id: FACT-status-status-webhook-secret-value-logged
type: fact
---
The status page never writes STATUS_WEBHOOK_SECRET or a value derived from it to its logs.

Modeled from REQ-status-status-webhook-secret-never-logged so the claim can be checked for contradictions.
