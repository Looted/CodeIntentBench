---
title: BILLING_WEBHOOK_SECRET, the webhook signing secret of the billing webhook receiver
status: active
fact_kind: subject
subject_key: backoffice.billing_webhook_secret
canonical_key: backoffice.billing_webhook_secret
distinct_from:
  - backoffice.backoffice_session_secret
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: Papra Cloud back office handbook
  recorded_at: '2026-05-17T15:09:24.000Z'
id: FACT-backoffice-billing-webhook-secret-subject
type: fact
---
BILLING_WEBHOOK_SECRET holds the webhook signing secret that the billing webhook receiver reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
