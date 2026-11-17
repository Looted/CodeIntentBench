---
title: n8n.n8n_trigger_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-n8n-n8n-trigger-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-143'
  recorded_at: '2025-07-26T08:59:44.000Z'
id: FACT-n8n-n8n-trigger-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-n8n-n8n-trigger-secret-never-logged so the claim can be checked for contradictions.
