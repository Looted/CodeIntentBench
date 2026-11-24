---
title: n8n.organization_connections limit_configurable = True
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EE3A84A4255D9DE5
claim_text: the limit is configured per deployment and 5 is the default
text_ref: REQ-n8n-organization-connections-maximum-count
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-148'
  recorded_at: '2025-09-21T14:11:25.000Z'
id: FACT-n8n-organization-connections-limit-configurable
type: fact
---
The limit is configured per deployment and 5 is the default.

Modeled from REQ-n8n-organization-connections-maximum-count so the claim can be checked for contradictions.
