---
title: The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-D88A56041BE864ED
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b6e9e80c8a32cbc28f0030f118b9caf01063c5a0da8c0c1146da7a603067c6a8
semantic_inventory:
  - claim_key: CLAIM-D88A56041BE864ED
    claim_text: The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - n8n.n8n_trigger_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 97
      end: 137
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-143'
  recorded_at: '2025-07-26T08:59:44.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-n8n-n8n-trigger-secret-never-logged
type: req
---
The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(n8n): keep N8N_TRIGGER_SECRET out of logs (N8N-143)

Source: n8n integration notes - N8N-143
