---
title: The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included.
status: active
semantic_text: The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included.
semantic_clauses:
  - The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included
logic_claims:
  - CLAIM-8E9943AC6F7D0B1E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d6b1016421a46c91ebeb5b1842d75189b590b6ce2822bc96b95e6015c1d332d8
semantic_inventory:
  - claim_key: CLAIM-8E9943AC6F7D0B1E
    claim_text: The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-146'
  recorded_at: '2026-07-23T15:07:56.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-n8n-trigger-secret-development-default
type: req
---
The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included.

## Context

Reason not stated.

## Source

> feat(n8n): N8N_TRIGGER_SECRET outside production (N8N-146)

Source: n8n integration notes - N8N-146
