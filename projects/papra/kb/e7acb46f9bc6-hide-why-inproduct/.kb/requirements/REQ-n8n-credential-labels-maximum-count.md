---
title: At most 30 credential labels can be created per workflow in the n8n integration; the limit is fixed.
status: active
semantic_text: At most 30 credential labels can be created per workflow in the n8n integration; the limit is fixed.
semantic_clauses:
  - At most 30 credential labels can be created per workflow in the n8n integration
  - the limit is fixed
logic_claims:
  - CLAIM-B54577BBA56DC261
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 75210cacde6eadebe308169334b73c3dc11893ad1ec1ebe77ee1032b38af4b43
semantic_inventory:
  - claim_key: CLAIM-B54577BBA56DC261
    claim_text: At most 30 credential labels can be created per workflow in the n8n integration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - n8n.credential_labels
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 99
    subjects:
      - n8n.credential_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-109'
  recorded_at: '2025-11-19T12:48:38.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-credential-labels-maximum-count
type: req
---
At most 30 credential labels can be created per workflow in the n8n integration; the limit is fixed.

## Context

Reason not stated.

## Why this changed

Reason not stated. N8N-109 replaces the value recorded in N8N-39 without saying why it changed.

## Source

> feat(n8n): limit credential labels per workflow (N8N-109)

Source: n8n integration notes - N8N-109
