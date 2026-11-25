---
title: Client labels in the partner portal are compared exactly as typed; two client labels that differ only by letter case are distinct.
status: active
semantic_text: Client labels in the partner portal are compared exactly as typed; two client labels that differ only by letter case are distinct.
semantic_clauses:
  - Client labels in the partner portal are compared exactly as typed
  - two client labels that differ only by letter case are distinct
logic_claims:
  - CLAIM-4562621A189282E5
  - CLAIM-FE5D20E88D1CAB6F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: affefc107109f3a3f339eeb06fd567a527de6510aee22e16e65da4bebe208d64
semantic_inventory:
  - claim_key: CLAIM-4562621A189282E5
    claim_text: Client labels in the partner portal are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - portal.client_labels
  - claim_key: CLAIM-FE5D20E88D1CAB6F
    claim_text: two client labels that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 129
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-105'
  recorded_at: '2025-11-17T16:23:40.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-client-labels-case-sensitive-names
type: req
---
Client labels in the partner portal are compared exactly as typed; two client labels that differ only by letter case are distinct.

## Context

Reason not stated.

## Source

> docs(portal): client label names are case-sensitive (PRT-105)

Source: Partner portal decision log - PRT-105
