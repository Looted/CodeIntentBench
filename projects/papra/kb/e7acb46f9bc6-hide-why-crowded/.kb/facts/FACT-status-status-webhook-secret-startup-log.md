---
title: status.status_webhook_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-status-status-webhook-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-233'
  recorded_at: '2025-02-20T17:51:39.000Z'
id: FACT-status-status-webhook-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-status-status-webhook-secret-never-logged so the claim can be checked for contradictions.
