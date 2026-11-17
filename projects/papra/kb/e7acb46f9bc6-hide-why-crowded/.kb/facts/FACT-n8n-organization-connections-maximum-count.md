---
title: n8n.organization_connections maximum_count = 5
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: maximum_count
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-9EC665D195010DBF
claim_text: The number of organization connections per workflow in the n8n integration is limited to 5
text_ref: REQ-n8n-organization-connections-maximum-count
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-148'
  recorded_at: '2025-09-21T14:11:25.000Z'
id: FACT-n8n-organization-connections-maximum-count
type: fact
---
The number of organization connections per workflow in the n8n integration is limited to 5.

Modeled from REQ-n8n-organization-connections-maximum-count so the claim can be checked for contradictions.
