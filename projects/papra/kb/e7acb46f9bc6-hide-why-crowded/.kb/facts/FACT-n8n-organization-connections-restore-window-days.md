---
title: n8n.organization_connections restore_window_days = 7
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: restore_window_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-77AA3A0709A38D68
claim_text: A deleted organization connection in the n8n integration can be restored for 7 days
text_ref: REQ-n8n-organization-connections-deletion-grace
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-168'
  recorded_at: '2026-01-23T10:59:33.000Z'
id: FACT-n8n-organization-connections-restore-window-days
type: fact
---
A deleted organization connection in the n8n integration can be restored for 7 days.

Modeled from REQ-n8n-organization-connections-deletion-grace so the claim can be checked for contradictions.
