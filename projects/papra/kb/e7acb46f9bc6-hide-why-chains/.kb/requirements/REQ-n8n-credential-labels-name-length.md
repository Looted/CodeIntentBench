---
title: Credential label names in the n8n integration are limited to 40 characters.
status: active
semantic_text: Credential label names in the n8n integration are limited to 40 characters.
semantic_clauses:
  - Credential label names in the n8n integration are limited to 40 characters
logic_claims:
  - CLAIM-749604E85782F634
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 07a5695ec7552df828ff444415c1932194f66e62dda624046b63b4b00b24e092
semantic_inventory:
  - claim_key: CLAIM-749604E85782F634
    claim_text: Credential label names in the n8n integration are limited to 40 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - n8n.credential_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-114'
  recorded_at: '2026-05-23T14:38:48.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Longer names broke the layout of the list where credential labels are shown.
id: REQ-n8n-credential-labels-name-length
type: req
---
Credential label names in the n8n integration are limited to 40 characters.

## Context

Longer names broke the layout of the list where credential labels are shown.

## Source

> feat(n8n): cap credential label name length at 40 (N8N-114)

Source: n8n integration notes - N8N-114
