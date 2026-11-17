---
title: Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-29B8A15AAA3DD419
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eea83a09065d7bf5b3ac4a516f5cce37bdfe66501b0acfe4464e64fdda9d0987
semantic_inventory:
  - claim_key: CLAIM-29B8A15AAA3DD419
    claim_text: Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - n8n.credential_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-125'
  recorded_at: '2025-07-05T16:45:18.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-credential-labels-delete-in-use
type: req
---
Deleting a credential label in the n8n integration removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(n8n): deleting a credential label detaches it (N8N-125)

Source: n8n integration notes - N8N-125
