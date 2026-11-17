---
title: n8n.organization_connections purged_after_window = True
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-n8n-organization-connections-deletion-grace
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-168'
  recorded_at: '2026-01-23T10:59:33.000Z'
id: FACT-n8n-organization-connections-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-n8n-organization-connections-deletion-grace so the claim can be checked for contradictions.
