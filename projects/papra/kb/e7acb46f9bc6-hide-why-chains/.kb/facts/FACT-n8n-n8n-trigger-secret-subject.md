---
title: N8N_TRIGGER_SECRET, the trigger signing secret of the n8n trigger endpoint
status: active
fact_kind: subject
subject_key: n8n.n8n_trigger_secret
canonical_key: n8n.n8n_trigger_secret
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: n8n integration notes
  recorded_at: '2026-08-21T11:05:05.000Z'
id: FACT-n8n-n8n-trigger-secret-subject
type: fact
---
N8N_TRIGGER_SECRET holds the trigger signing secret that the n8n trigger endpoint reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
