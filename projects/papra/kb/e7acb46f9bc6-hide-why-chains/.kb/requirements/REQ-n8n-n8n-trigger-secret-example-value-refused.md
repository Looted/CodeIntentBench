---
title: The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment.
status: active
semantic_text: The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment.
semantic_clauses:
  - The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-643698EFBA8BEC8D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ff6956779bb5ebb1a4a14e0cb39daf87ab2adb035901047c379f6df804301d33
semantic_inventory:
  - claim_key: CLAIM-643698EFBA8BEC8D
    claim_text: The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-134'
  recorded_at: '2025-06-27T17:55:42.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: The example value was found in use on public deployments.
id: REQ-n8n-n8n-trigger-secret-example-value-refused
type: req
---
The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(n8n): refuse the documented example N8N_TRIGGER_SECRET (N8N-134)

Source: n8n integration notes - N8N-134
