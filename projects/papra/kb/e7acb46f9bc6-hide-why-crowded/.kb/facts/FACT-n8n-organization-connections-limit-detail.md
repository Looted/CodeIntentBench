---
title: n8n.organization_connections limit_detail = organization connections shared with them do not count
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: limit_detail
operator: eq
value_type: string
value_string: organization connections shared with them do not count
claim_key: CLAIM-CE903C7A6ED569D8
claim_text: organization connections shared with them do not count
text_ref: REQ-n8n-organization-connections-what-counts
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-151'
  recorded_at: '2026-01-05T16:21:06.000Z'
id: FACT-n8n-organization-connections-limit-detail
type: fact
---
Organization connections shared with them do not count.

Modeled from REQ-n8n-organization-connections-what-counts so the claim can be checked for contradictions.
