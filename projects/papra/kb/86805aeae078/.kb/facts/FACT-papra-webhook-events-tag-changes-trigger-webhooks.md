---
title: webhook.events tag_changes_trigger_webhooks = True
status: active
fact_kind: property_value
subject_key: webhook.events
property_key: tag_changes_trigger_webhooks
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-83F92137227AF9DA
claim_text: so tag changes made after upload can trigger automations
text_ref: REQ-webhooks-emit-document-updated-document-ta-FB361BD1
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #428'
  recorded_at: '2026-11-15T21:51:29.660Z'
id: FACT-papra-webhook-events-tag-changes-trigger-webhooks
type: fact
---
So tag changes made after upload can trigger automations.

Modeled from REQ-webhooks-emit-document-updated-document-ta-FB361BD1 so the claim can be checked for contradictions.
