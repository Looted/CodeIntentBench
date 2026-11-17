---
title: N8N_TRIGGER_SECRET is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.
status: active
semantic_text: N8N_TRIGGER_SECRET is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.
semantic_clauses:
  - N8N_TRIGGER_SECRET is rotated every 60 days
  - the previous value stays valid for 24 hours after a rotation
logic_claims:
  - CLAIM-D3CFEA7164107746
  - CLAIM-A45280A30BC5D577
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8ffe1c75e0575b1ca334b56a0723bd7c12f9784e4d46e65a3bb421a4bdc8f981
semantic_inventory:
  - claim_key: CLAIM-D3CFEA7164107746
    claim_text: N8N_TRIGGER_SECRET is rotated every 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - n8n.n8n_trigger_secret
  - claim_key: CLAIM-A45280A30BC5D577
    claim_text: the previous value stays valid for 24 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 45
      end: 105
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-137'
  recorded_at: '2026-09-01T17:43:34.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-n8n-trigger-secret-rotation
type: req
---
N8N_TRIGGER_SECRET is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(n8n): rotate N8N_TRIGGER_SECRET every 60 days (N8N-137)

Source: n8n integration notes - N8N-137
