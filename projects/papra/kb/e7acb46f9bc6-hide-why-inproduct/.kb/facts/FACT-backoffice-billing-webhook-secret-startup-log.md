---
title: backoffice.billing_webhook_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-backoffice-billing-webhook-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-198'
  recorded_at: '2026-04-12T08:37:57.000Z'
id: FACT-backoffice-billing-webhook-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-backoffice-billing-webhook-secret-never-logged so the claim can be checked for contradictions.
