---
title: n8n.organization_connections ownership_transfer = any account, on acceptance
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: ownership_transfer
operator: eq
value_type: string
value_string: any account, on acceptance
claim_key: CLAIM-ECA8EDF4134D5E1F
claim_text: Ownership of an organization connection in the n8n integration can be transferred to any verified account, which must accept the transfer
text_ref: REQ-n8n-organization-connections-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-171'
  recorded_at: '2025-11-14T08:51:16.000Z'
id: FACT-n8n-organization-connections-ownership-transfer
type: fact
---
Ownership of an organization connection in the n8n integration can be transferred to any verified account, which must accept the transfer.

Modeled from REQ-n8n-organization-connections-ownership-transfer so the claim can be checked for contradictions.
