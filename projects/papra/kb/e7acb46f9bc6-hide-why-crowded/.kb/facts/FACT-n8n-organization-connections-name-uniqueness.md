---
title: n8n.organization_connections name_uniqueness = not unique
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: name_uniqueness
operator: eq
value_type: string
value_string: not unique
claim_key: CLAIM-1161AC4B112F8B66
claim_text: Organization connection names in the n8n integration are not required to be unique
text_ref: REQ-n8n-organization-connections-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-159'
  recorded_at: '2025-02-06T16:39:31.000Z'
id: FACT-n8n-organization-connections-name-uniqueness
type: fact
---
Organization connection names in the n8n integration are not required to be unique.

Modeled from REQ-n8n-organization-connections-name-uniqueness so the claim can be checked for contradictions.
