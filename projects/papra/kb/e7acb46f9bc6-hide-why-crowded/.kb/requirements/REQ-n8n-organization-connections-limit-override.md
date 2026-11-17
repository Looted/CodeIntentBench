---
title: Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration.
status: active
semantic_text: Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration.
semantic_clauses:
  - Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration
logic_claims:
  - CLAIM-6D6C56D6EFC2C308
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b3555b7d365764db8a934b624c581f573e2a89041d5b8950f0d6a62c7573bbee
semantic_inventory:
  - claim_key: CLAIM-6D6C56D6EFC2C308
    claim_text: Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - n8n.organization_connections
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-156'
  recorded_at: '2026-02-21T12:05:48.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Support needed a way to help one customer without changing the limit for all.
id: REQ-n8n-organization-connections-limit-override
type: req
---
Staff can raise or lower the organization connection limit for an individual workflow in the n8n integration.

## Context

Support needed a way to help one customer without changing the limit for all.

## Source

> feat(n8n): overriding the organization connection limit (N8N-156)

Source: n8n integration notes - N8N-156
