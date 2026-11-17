---
title: A deleted organization connection in the n8n integration can be restored for 7 days; after that it is removed for good.
status: active
semantic_text: A deleted organization connection in the n8n integration can be restored for 7 days; after that it is removed for good.
semantic_clauses:
  - A deleted organization connection in the n8n integration can be restored for 7 days
  - after that it is removed for good
logic_claims:
  - CLAIM-77AA3A0709A38D68
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 16a4447c73f369a328667174492c0ce1682c7939a9e654566b4270ab75793230
semantic_inventory:
  - claim_key: CLAIM-77AA3A0709A38D68
    claim_text: A deleted organization connection in the n8n integration can be restored for 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - n8n.organization_connections
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 118
    subjects:
      - n8n.organization_connections
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-168'
  recorded_at: '2026-01-23T10:59:33.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-n8n-organization-connections-deletion-grace
type: req
---
A deleted organization connection in the n8n integration can be restored for 7 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(n8n): 7-day restore window for organization connections (N8N-168)

Source: n8n integration notes - N8N-168
