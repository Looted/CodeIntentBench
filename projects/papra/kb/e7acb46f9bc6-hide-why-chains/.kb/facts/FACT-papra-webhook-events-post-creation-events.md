---
title: webhook.events post_creation_events = document:updated,document:tag:added,document:tag:removed
status: active
fact_kind: property_value
subject_key: webhook.events
property_key: post_creation_events
operator: eq
value_type: string
value_string: document:updated,document:tag:added,document:tag:removed
claim_key: CLAIM-CC06944D3AC63FDB
claim_text: Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation
text_ref: REQ-webhooks-emit-document-updated-document-ta-FB361BD1
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #428'
  recorded_at: '2026-11-15T21:46:38.926Z'
id: FACT-papra-webhook-events-post-creation-events
type: fact
---
Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation.

Modeled from REQ-webhooks-emit-document-updated-document-ta-FB361BD1 so the claim can be checked for contradictions.
