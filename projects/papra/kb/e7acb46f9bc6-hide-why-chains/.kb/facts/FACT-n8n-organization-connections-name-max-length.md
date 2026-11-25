---
title: n8n.organization_connections name_max_length = 100
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: name_max_length
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-9A2EB2213D0816F3
claim_text: Organization connection names in the n8n integration are between 3 and 100 characters long
text_ref: REQ-n8n-organization-connections-name-length
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-167'
  recorded_at: '2025-10-05T13:41:51.000Z'
id: FACT-n8n-organization-connections-name-max-length
type: fact
---
Organization connection names in the n8n integration are between 3 and 100 characters long.

Modeled from REQ-n8n-organization-connections-name-length so the claim can be checked for contradictions.
