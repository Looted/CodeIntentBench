---
title: STATUS_WEBHOOK_SECRET, the webhook signing secret of the status page
status: active
fact_kind: subject
subject_key: status.status_webhook_secret
canonical_key: status.status_webhook_secret
distinct_from:
  - status.status_page_administrator_accounts
  - status.status_page_incident_filter
  - status.status_subscriptions
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: Status page runbook
  recorded_at: '2026-03-28T15:30:38.000Z'
id: FACT-status-status-webhook-secret-subject
type: fact
---
STATUS_WEBHOOK_SECRET holds the webhook signing secret that the status page reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
