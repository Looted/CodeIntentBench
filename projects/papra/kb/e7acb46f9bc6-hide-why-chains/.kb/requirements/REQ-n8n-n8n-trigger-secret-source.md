---
title: The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set.
status: active
semantic_text: The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set.
semantic_clauses:
  - The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-5BC6886A043F6EBE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a1be38f64ec526f01f4b1add88c4232055952bb3dec97b366f6bfd6cae25c62e
semantic_inventory:
  - claim_key: CLAIM-5BC6886A043F6EBE
    claim_text: The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-142'
  recorded_at: '2026-01-19T16:42:43.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Container platforms mount secrets as files.
id: REQ-n8n-n8n-trigger-secret-source
type: req
---
The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set.

## Context

Container platforms mount secrets as files.

## Source

> feat(n8n): where N8N_TRIGGER_SECRET is read from (N8N-142)

Source: n8n integration notes - N8N-142
