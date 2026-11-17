---
title: Sessions of integration service accounts last at most 1 day; they end after 60 minutes without activity.
status: active
semantic_text: Sessions of integration service accounts last at most 1 day; they end after 60 minutes without activity.
semantic_clauses:
  - Sessions of integration service accounts last at most 1 day
  - they end after 60 minutes without activity
logic_claims:
  - CLAIM-39D9E2505DFB4890
  - CLAIM-F3D76F855733BF57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a8dbde6ea2bc31c65969a92912ba5b676116bc5727c67f974bbddb29a5a3da7
semantic_inventory:
  - claim_key: CLAIM-39D9E2505DFB4890
    claim_text: Sessions of integration service accounts last at most 1 day
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - n8n.integration_service_accounts
  - claim_key: CLAIM-F3D76F855733BF57
    claim_text: they end after 60 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 61
      end: 103
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-203'
  recorded_at: '2026-05-11T14:13:49.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Shared computers were left signed in.
id: REQ-n8n-integration-service-accounts-session-lifetime
type: req
---
Sessions of integration service accounts last at most 1 day; they end after 60 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(n8n): session lifetime (N8N-203)

Source: n8n integration notes - N8N-203
