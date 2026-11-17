---
title: Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-09174C74DC14FC9E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c6a3c039a92e4dc097b437884b50d3ebc3bbe12c214fb5d583a8ac7eb8f60c76
semantic_inventory:
  - claim_key: CLAIM-09174C74DC14FC9E
    claim_text: Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-133'
  recorded_at: '2025-05-20T08:30:40.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-client-labels-delete-in-use
type: req
---
Deleting a client label in the partner portal removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(portal): deleting a client label detaches it (PRT-133)

Source: Partner portal decision log - PRT-133
