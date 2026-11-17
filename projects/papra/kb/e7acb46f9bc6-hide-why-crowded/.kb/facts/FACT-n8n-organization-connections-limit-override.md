---
title: n8n.organization_connections limit_override = per owner
status: active
fact_kind: property_value
subject_key: n8n.organization_connections
property_key: limit_override
operator: eq
value_type: string
value_string: per owner
claim_key: CLAIM-6D6C56D6EFC2C308
claim_text: Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration
text_ref: REQ-n8n-organization-connections-limit-override
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-156'
  recorded_at: '2026-02-21T12:05:48.000Z'
id: FACT-n8n-organization-connections-limit-override
type: fact
---
Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration.

Modeled from REQ-n8n-organization-connections-limit-override so the claim can be checked for contradictions.
