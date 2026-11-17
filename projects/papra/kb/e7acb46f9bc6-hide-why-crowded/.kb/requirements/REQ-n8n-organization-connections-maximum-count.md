---
title: The number of organization connections per workflow in the n8n integration is limited to 5; the limit is configured per deployment and 5 is the default.
status: active
semantic_text: The number of organization connections per workflow in the n8n integration is limited to 5; the limit is configured per deployment and 5 is the default.
semantic_clauses:
  - The number of organization connections per workflow in the n8n integration is limited to 5
  - the limit is configured per deployment and 5 is the default
logic_claims:
  - CLAIM-9EC665D195010DBF
  - CLAIM-EE3A84A4255D9DE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 271f10e0dfd6cac603ae51fde8cb6b64b6f2429255f7459e437b3d93ce3d295a
semantic_inventory:
  - claim_key: CLAIM-9EC665D195010DBF
    claim_text: The number of organization connections per workflow in the n8n integration is limited to 5
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - n8n.organization_connections
  - claim_key: CLAIM-EE3A84A4255D9DE5
    claim_text: the limit is configured per deployment and 5 is the default
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 151
    subjects:
      - n8n.organization_connections
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-148'
  recorded_at: '2025-09-21T14:11:25.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: A handful of accounts had created thousands of organization connections and slowed the listing for everyone.
id: REQ-n8n-organization-connections-maximum-count
type: req
---
The number of organization connections per workflow in the n8n integration is limited to 5; the limit is configured per deployment and 5 is the default.

## Context

A handful of accounts had created thousands of organization connections and slowed the listing for everyone.

## Source

> feat(n8n): limit organization connections per workflow (N8N-148)

Source: n8n integration notes - N8N-148
