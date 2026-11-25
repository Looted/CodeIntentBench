---
title: The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET.
status: active
semantic_text: The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET.
semantic_clauses:
  - The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET
logic_claims:
  - CLAIM-909F59291089344F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 17d58684c1d98e6b31f32e5a2e0aca25206b8629336b20c93784efcec2f2a63e
semantic_inventory:
  - claim_key: CLAIM-909F59291089344F
    claim_text: The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-132'
  recorded_at: '2025-03-03T15:52:54.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-n8n-trigger-secret-required-in-production
type: req
---
The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET.

## Context

Reason not stated.

## Source

> feat(n8n): require N8N_TRIGGER_SECRET in production (N8N-132)

Source: n8n integration notes - N8N-132
