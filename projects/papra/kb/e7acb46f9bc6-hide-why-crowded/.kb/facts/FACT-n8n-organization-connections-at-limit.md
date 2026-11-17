---
title: n8n.organization_connections at_limit = refused, limit named
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit named
claim_key: CLAIM-29C1AB7CC79A4D19
claim_text: Creating an organization connection in the n8n integration when the workflow is at the limit is refused with an error that names the limit
text_ref: REQ-n8n-organization-connections-at-the-limit
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-158'
  recorded_at: '2025-09-23T13:44:35.000Z'
id: FACT-n8n-organization-connections-at-limit
type: fact
---
Creating an organization connection in the n8n integration when the workflow is at the limit is refused with an error that names the limit.

Modeled from REQ-n8n-organization-connections-at-the-limit so the claim can be checked for contradictions.
