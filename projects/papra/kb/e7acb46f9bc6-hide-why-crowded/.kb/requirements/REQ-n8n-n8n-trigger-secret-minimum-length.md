---
title: N8N_TRIGGER_SECRET must be at least 40 characters long.
status: active
semantic_text: N8N_TRIGGER_SECRET must be at least 40 characters long.
semantic_clauses:
  - N8N_TRIGGER_SECRET must be at least 40 characters long
logic_claims:
  - CLAIM-BF44499629348531
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7bfe1f9eb23aea1cee5018da2f3091bb48da25cba43644cdb6a55c8847da51ad
semantic_inventory:
  - claim_key: CLAIM-BF44499629348531
    claim_text: N8N_TRIGGER_SECRET must be at least 40 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - n8n.n8n_trigger_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-133'
  recorded_at: '2026-07-11T11:09:10.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Short values of the trigger signing secret can be guessed offline from one signed value.
id: REQ-n8n-n8n-trigger-secret-minimum-length
type: req
---
N8N_TRIGGER_SECRET must be at least 40 characters long.

## Context

Short values of the trigger signing secret can be guessed offline from one signed value.

## Why this changed

N8N-133 replaced the value recorded in N8N-78 and gives this reason for the change: A review found 16-character values that were dictionary words.

## Source

> feat(n8n): N8N_TRIGGER_SECRET minimum length 40 (N8N-133)

Source: n8n integration notes - N8N-133
