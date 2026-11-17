---
title: Credential labels in the n8n integration are compared exactly as typed; two credential labels that differ only by letter case are distinct.
status: active
semantic_text: Credential labels in the n8n integration are compared exactly as typed; two credential labels that differ only by letter case are distinct.
semantic_clauses:
  - Credential labels in the n8n integration are compared exactly as typed
  - two credential labels that differ only by letter case are distinct
logic_claims:
  - CLAIM-47C1795D8A2F794B
  - CLAIM-7F19756FE9B2E54D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c832f28f605732092af05444b16b22ad46707e7a9712cf70646d141be4d8632
semantic_inventory:
  - claim_key: CLAIM-47C1795D8A2F794B
    claim_text: Credential labels in the n8n integration are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - n8n.credential_labels
  - claim_key: CLAIM-7F19756FE9B2E54D
    claim_text: two credential labels that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 138
    subjects:
      - n8n.credential_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-108'
  recorded_at: '2025-12-11T09:39:53.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
id: REQ-n8n-credential-labels-case-sensitive-names
type: req
---
Credential labels in the n8n integration are compared exactly as typed; two credential labels that differ only by letter case are distinct.

## Context

Reason not stated.

## Source

> docs(n8n): credential label names are case-sensitive (N8N-108)

Source: n8n integration notes - N8N-108
