---
title: n8n.organization_connections counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-D046BAA560E50F26
claim_text: Only organization connections the workflow owns count toward the limit in the n8n integration
text_ref: REQ-n8n-organization-connections-what-counts
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-151'
  recorded_at: '2026-01-05T16:21:06.000Z'
id: FACT-n8n-organization-connections-counted-toward-limit
type: fact
---
Only organization connections the workflow owns count toward the limit in the n8n integration.

Modeled from REQ-n8n-organization-connections-what-counts so the claim can be checked for contradictions.
