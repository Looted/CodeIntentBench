---
title: An integration service account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: An integration service account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - An integration service account can have at most 10 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-1B7CED13658E0448
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1e355d179057a4cb40b0d2e98ab0d711db202ae783e32afeb523b86c9b1ae1b7
semantic_inventory:
  - claim_key: CLAIM-1B7CED13658E0448
    claim_text: An integration service account can have at most 10 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - n8n.integration_service_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 113
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-204'
  recorded_at: '2026-06-08T10:55:02.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-integration-service-accounts-concurrent-sessions
type: req
---
An integration service account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(n8n): limit concurrent sessions (N8N-204)

Source: n8n integration notes - N8N-204
