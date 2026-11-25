---
title: status.status_webhook_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-402BA6FE6F3EC003
claim_text: The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set
text_ref: REQ-status-status-webhook-secret-source
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-230'
  recorded_at: '2025-08-06T10:18:11.000Z'
id: FACT-status-status-webhook-secret-value-source
type: fact
---
The status page reads STATUS_WEBHOOK_SECRET from a file named by STATUS_WEBHOOK_SECRET_FILE when that variable is set.

Modeled from REQ-status-status-webhook-secret-source so the claim can be checked for contradictions.
